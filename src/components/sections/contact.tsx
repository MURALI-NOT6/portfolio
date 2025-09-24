"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContactForm } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";
import Link from "next/link";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const contactInfo = [
  { icon: <Mail className="h-5 w-5 text-primary" />, text: "muralinot6@gmail.com", href: "mailto:muralinot6@gmail.com", label: "Email" },
  // { icon: <Phone className="h-5 w-5 text-primary" />, text: "+1 (123) 456-7890", href: "tel:+11234567890", label: "Phone" },
  { icon: <Linkedin className="h-5 w-5 text-primary" />, text: "linkedin.com/in/murali-dharan-m-897243195", href: "https://www.linkedin.com/in/murali-dharan-m-897243195/", label: "LinkedIn" },
  { icon: <MapPin className="h-5 w-5 text-primary" />, text: "Salem, Tamil Nadu, IN.", label: "Location" },
];

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const {
    formState: { isSubmitting },
    reset,
  } = form;

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    const result = await submitContactForm(values);

    if (result.success) {
      toast({
        title: "Message Sent!",
        description: result.message,
      });
      reset();
    } else {
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong.",
        description: result.message,
      });
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-16 md:py-24 min-h-screen flex items-center">
       <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl opacity-50" />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-10 duration-500">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-left-10 duration-500">
             {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">{item.icon}</div>
                <div>
                  {item.href ? (
                    <Link href={item.href} target="_blank" className="hover:text-primary transition-colors break-all">
                      <p className="font-semibold">{item.text}</p>
                    </Link>
                  ) : (
                    <p className="font-semibold break-all">{item.text}</p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Card className="lg:col-span-3 animate-in fade-in slide-in-from-right-10 duration-500">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <Send className="h-6 w-6" /> Send a Message
              </CardTitle>
              <CardDescription>I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Hi, I'd like to talk about..." rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full text-white" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
