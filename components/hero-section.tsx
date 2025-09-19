import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, Award, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 텍스트 콘텐츠 */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                새로운 기술을
                <span className="text-primary block">마스터하세요</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-lg">
                전문가가 직접 제작한 고품질 온라인 강의로 당신의 커리어를 한 단계 업그레이드하세요.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                강의 둘러보기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Play className="mr-2 h-5 w-5" />
                미리보기
              </Button>
            </div>

            {/* 통계 */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span className="text-2xl font-bold">10K+</span>
                </div>
                <p className="text-sm text-muted-foreground">수강생</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-5 w-5 text-primary mr-2" />
                  <span className="text-2xl font-bold">50+</span>
                </div>
                <p className="text-sm text-muted-foreground">강의</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span className="text-2xl font-bold">24/7</span>
                </div>
                <p className="text-sm text-muted-foreground">지원</p>
              </div>
            </div>
          </div>

          {/* 이미지 */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
              <img
                src="/placeholder-phr30.png"
                alt="온라인 학습 일러스트"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* 플로팅 카드들 */}
            <div className="absolute -top-4 -left-4 bg-card border rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">실시간 강의</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">수료증 발급</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
