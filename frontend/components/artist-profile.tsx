"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Palette, Mail, Instagram, Youtube, MessageCircle } from "lucide-react";
import { ArtworkModal, Artwork } from "./components-artwork-modal";
import { EmailModal } from "./components-email-modal";
import Image from "next/image";

const artworks: Artwork[] = [
  {
    id: 1,
    title: "도시의 아침",
    year: 2020,
    category: "추상화",
    description: "도시의 활기찬 아침을 표현한 작품",
    medium: "캔버스에 아크릴",
    dimensions: "100cm x 150cm",
  },
  {
    id: 2,
    title: "자연의 속삭임",
    year: 2021,
    category: "풍경화",
    description: "고요한 숲의 아름다움을 담은 작품",
    medium: "캔버스에 유화",
    dimensions: "120cm x 120cm",
  },
  {
    id: 3,
    title: "현대인의 고독",
    year: 2022,
    category: "초현실주의",
    description: "현대 사회의 고립감을 표현한 작품",
    medium: "캔버스에 혼합 매체",
    dimensions: "80cm x 100cm",
  },
];

export function ArtistProfileComponent() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">백순자</h1>
          <p className="text-xl text-gray-600">현대 추상화의 숨겨진 보석</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Image src="/images/profile.jpeg" alt="백순자 프로필" width={400} height={400} className="w-full h-auto rounded-lg shadow-lg" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">소개</h2>
            <p className="text-gray-600 mb-4">
              백순자는 한국의 신진 추상화가로, 자연과 도시의 조화를 독특한 시각으로 표현합니다. 그의 작품은 현대 사회의 복잡성과 자연의
              순수함을 동시에 담아내어, 보는 이로 하여금 깊은 사색에 빠지게 합니다.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-[#E2725B] hover:bg-[#E2725B]/80">추상화</Badge>
              <Badge className="bg-[#E2725B] hover:bg-[#E2725B]/80">현대미술</Badge>
              <Badge className="bg-[#E2725B] hover:bg-[#E2725B]/80">자연주의</Badge>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">주요 작품</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {artworks.map((artwork) => (
              <Card
                key={artwork.id}
                className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedArtwork(artwork)}
              >
                <CardContent className="p-4">
                  <Image
                    src={`/images/${artwork.id}.jpeg?height=200&width=300&text=${encodeURIComponent(artwork.title)}`}
                    alt={artwork.title}
                    width={300}
                    height={200}
                  />
                  <p className="mt-2 text-center text-gray-600">{artwork.title}</p>
                  <p className="text-center text-sm text-gray-500">{artwork.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">약력</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>2010 - 서울대학교 미술대학 졸업</li>
            <li>2013 - 첫 개인전 &quot;도시의 숨결&quot; 개최</li>
            <li>2016 - 국제 현대미술 공모전 우수상 수상</li>
            <li>2019 - 뉴욕 현대미술관 그룹전 참가</li>
            <li>2022 - 서울시립미술관 특별전 &quot;자연과 도시의 대화&quot; 개최</li>
          </ul>
        </section>

        <footer className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">연락처 및 SNS</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/portfolio">
              <Button className="bg-[#E2725B] hover:bg-[#E2725B]/80">
                <Palette className="mr-2 h-4 w-4" /> 포트폴리오 보기
              </Button>
            </Link>
            <Button className="bg-[#E2725B] hover:bg-[#E2725B]/80" onClick={() => setIsEmailModalOpen(true)}>
              <Mail className="mr-2 h-4 w-4" /> 이메일 보내기
            </Button>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#E2725B] hover:bg-[#E2725B]/80">
                <Instagram className="mr-2 h-4 w-4" /> 인스타그램
              </Button>
            </Link>
            <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#E2725B] hover:bg-[#E2725B]/80">
                <Youtube className="mr-2 h-4 w-4" /> 유튜브
              </Button>
            </Link>
            <Link href="https://www.kakaocorp.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#E2725B] hover:bg-[#E2725B]/80">
                <MessageCircle className="mr-2 h-4 w-4" /> 카카오톡
              </Button>
            </Link>
          </div>
        </footer>
      </div>

      <ArtworkModal artwork={selectedArtwork} isOpen={!!selectedArtwork} onClose={() => setSelectedArtwork(null)} />

      <EmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
    </div>
  );
}
