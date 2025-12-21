"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

export type Project = {
  id: string;
  title: string;
  year: string;
  type: string;
  description: string;
  longDescription?: string;
  responsibilities?: string[];
  tags: string[];
  useCases?: string[];
  liveUrl: string;
  mediaType?: 'image' | 'video';
  mediaUrl?: string;
}

type ProjectDialogProps = {
  project: Project;
  projectImage?: ImagePlaceholder;
  children: React.ReactNode;
};

export function ProjectDialog({ project, projectImage, children }: ProjectDialogProps) {
  const displayMedia = project.mediaType && project.mediaUrl;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl">{project.title}</DialogTitle>
          <DialogDescription>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline">{project.year}</Badge>
              <Badge variant="secondary">{project.type}</Badge>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            {displayMedia ? (
              project.mediaType === 'image' ? (
                <Image
                  src={project.mediaUrl!}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <video
                  src={project.mediaUrl!}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )
            ) : projectImage ? (
              <Image
                src={projectImage.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                data-ai-hint={projectImage.imageHint}
              />
            ) : null}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg border-b pb-2">About this project</h3>
            <p className="text-muted-foreground">{project.longDescription || project.description}</p>
          </div>

          {project.responsibilities && project.responsibilities.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">My Responsibilities</h3>
              <ul className="space-y-2 text-muted-foreground">
                {project.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-4">
            <h3 className="font-semibold text-lg border-b pb-2">Techniques and Tools</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>

          {project.useCases && project.useCases.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">Use Cases</h3>
              <div className="flex flex-wrap gap-2">
                {project.useCases.map(useCase => (
                  <Badge key={useCase} variant="outline" className="font-normal">{useCase}</Badge>
                ))}
              </div>
            </div>
          )}
        </div>
        <DialogFooter>
          {project.liveUrl && project.liveUrl !== "#" && (
            <Button asChild>
              <Link href={project.liveUrl} target="_blank">
                Visit Live Site <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
