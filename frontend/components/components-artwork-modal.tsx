"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export interface Artwork {
  id: number;
  title: string;
  year: number;
  category: string;
  description: string;
  medium?: string;
  dimensions?: string;
}

interface ArtworkModalProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ArtworkModal({ artwork, isOpen, onClose }: ArtworkModalProps) {
  if (!artwork) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-[650px] h-[80vh]">
        <DialogHeader>
          <DialogTitle>{artwork.title}</DialogTitle>
          <DialogDescription>
            <Badge variant="secondary" className="bg-[#E2725B]/10 text-[#E2725B] mb-2">
              {artwork.category}
            </Badge>
            <p className="text-sm text-gray-500 mb-2">{artwork.year}</p>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 overflow-auto">
          <Image
            src={`/images/${artwork.id}.jpeg?height=300&width=400&text=${encodeURIComponent(artwork.title)}`}
            alt={artwork.title}
            width={600}
            height={600}
          />
          <p className="text-gray-700">{artwork.description}</p>
          {artwork.medium && <p className="text-sm text-gray-600">매체: {artwork.medium}</p>}
          {artwork.dimensions && <p className="text-sm text-gray-600">크기: {artwork.dimensions}</p>}
        </div>
      </DialogContent>
    </Dialog>
  );
}
