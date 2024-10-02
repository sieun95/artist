"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArtworkModal, Artwork } from "./components-artwork-modal";
import Image from "next/image";

const portfolioItems: Artwork[] = [
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
  {
    id: 4,
    title: "빛과 그림자",
    year: 2019,
    category: "추상화",
    description: "빛과 그림자의 대비를 통해 생명의 순환을 표현",
    medium: "캔버스에 아크릴",
    dimensions: "90cm x 120cm",
  },
  {
    id: 5,
    title: "꿈의 파편",
    year: 2018,
    category: "초현실주의",
    description: "꿈과 현실의 경계를 탐구한 작품",
    medium: "캔버스에 유화",
    dimensions: "100cm x 100cm",
  },
  {
    id: 6,
    title: "도시의 리듬",
    year: 2020,
    category: "추상화",
    description: "도시의 역동적인 에너지를 리듬감 있게 표현",
    medium: "캔버스에 아크릴",
    dimensions: "120cm x 180cm",
  },
  {
    id: 7,
    title: "숲의 노래",
    year: 2021,
    category: "풍경화",
    description: "숲의 생동감 넘치는 모습을 음악적으로 해석",
    medium: "캔버스에 유화",
    dimensions: "150cm x 100cm",
  },
  {
    id: 8,
    title: "시간의 흐름",
    year: 2022,
    category: "추상화",
    description: "시간의 흐름을 추상적 형태로 표현",
    medium: "캔버스에 혼합 매체",
    dimensions: "100cm x 150cm",
  },
  {
    id: 9,
    title: "내면의 풍경",
    year: 2019,
    category: "초현실주의",
    description: "인간 내면의 복잡한 감정을 풍경으로 표현",
    medium: "캔버스에 유화",
    dimensions: "80cm x 120cm",
  },
];

const categories = ["전체", "추상화", "풍경화", "초현실주의"];

export function PortfolioComponent() {
  const [filter, setFilter] = useState("전체");
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const filteredItems = filter === "전체" ? portfolioItems : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <nav className="mb-8 flex justify-between items-center">
          <Link href="/">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="mr-2 h-4 w-4" /> 메인 페이지로
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">백순자의 포트폴리오</h1>
        </nav>

        <div className="mb-8 flex justify-center space-x-4">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={`${filter === category ? "bg-[#E2725B] text-white" : "text-gray-600"} hover:bg-[#E2725B]/80 hover:text-white`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <Image
                  src={`/images/${item.id}.jpeg?height=300&width=400&text=${encodeURIComponent(item.title)}`}
                  alt={item.title}
                  width={400}
                  height={300}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-[#E2725B]/10 text-[#E2725B]">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{item.year}</span>
                  </div>
                  <Button className="mt-4 w-full bg-[#E2725B] hover:bg-[#E2725B]/80" onClick={() => setSelectedArtwork(item)}>
                    자세히 보기 <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ArtworkModal artwork={selectedArtwork} isOpen={!!selectedArtwork} onClose={() => setSelectedArtwork(null)} />
    </div>
  );
}
