"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateProjectDescription } from "@/ai/flows/generate-project-description";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "../ui/skeleton";

const formSchema = z.object({
  keywords: z.string().min(3, "Please provide some keywords."),
  projectDetails: z.string().min(10, "Please provide more project details."),
});

type AiGeneratorProps = {
  projectTitle: string;
};

export function AiDescriptionGenerator({ projectTitle }: AiGeneratorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [generatedDescription, setGeneratedDescription] = useState("");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keywords: "",
      projectDetails: "",
    },
  });

  const {
    formState: { isSubmitting },
    reset,
  } = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setGeneratedDescription("");
      const result = await generateProjectDescription(values);
      if (result.description) {
        setGeneratedDescription(result.description);
        toast({
          title: "Description Generated!",
          description: "Your new project description is ready.",
        });
      } else {
        throw new Error("Failed to generate description.");
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "There was a problem generating the description. Please try again.",
      });
    }
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      reset();
      setGeneratedDescription("");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Sparkles className="mr-2 h-4 w-4" />
          Generate with AI
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="font-headline flex items-center gap-2">
            <Sparkles className="text-primary"/>
            AI Description Generator
          </DialogTitle>
          <DialogDescription>
            For project: <span className="font-semibold text-foreground">{projectTitle}</span>. Provide keywords and details to generate a compelling description.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="keywords"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keywords</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., React, Next.js, E-commerce, Real-time"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Details</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the project's purpose, key features, and the technologies used."
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Generating..." : "Generate Description"}
                </Button>
            </DialogFooter>
          </form>
        </Form>
        {(isSubmitting || generatedDescription) && (
            <div className="space-y-2 pt-4 border-t">
                <h4 className="font-semibold">Generated Description:</h4>
                {isSubmitting ? (
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                ) : (
                    <Textarea readOnly value={generatedDescription} rows={6} className="bg-muted"/>
                )}
            </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
