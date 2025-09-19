import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, BookOpen } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "React 완전정복 - 기초부터 실전까지",
    description: "현대적인 React 개발의 모든 것을 배우고 실제 프로젝트를 완성해보세요.",
    price: "₩89,000",
    originalPrice: "₩129,000",
    rating: 4.9,
    students: 1234,
    duration: "12시간",
    level: "초급",
    image: "/react-programming-course-thumbnail.jpg",
    instructor: "김개발",
    category: "프론트엔드",
  },
  {
    id: 2,
    title: "Python 데이터 분석 마스터클래스",
    description: "Pandas, NumPy, Matplotlib을 활용한 실무 데이터 분석 기법을 익혀보세요.",
    price: "₩79,000",
    originalPrice: "₩119,000",
    rating: 4.8,
    students: 987,
    duration: "15시간",
    level: "중급",
    image: "/python-data-analysis-course-thumbnail.jpg",
    instructor: "박데이터",
    category: "데이터 사이언스",
  },
  {
    id: 3,
    title: "UI/UX 디자인 실무 과정",
    description: "Figma를 활용한 실무 디자인 프로세스와 사용자 경험 설계를 배워보세요.",
    price: "₩99,000",
    originalPrice: "₩149,000",
    rating: 4.9,
    students: 756,
    duration: "18시간",
    level: "초급",
    image: "/ui-ux-design-course-thumbnail.jpg",
    instructor: "이디자인",
    category: "디자인",
  },
  {
    id: 4,
    title: "Node.js 백엔드 개발 완성",
    description: "Express, MongoDB를 활용한 RESTful API 개발과 배포까지 완성해보세요.",
    price: "₩109,000",
    originalPrice: "₩159,000",
    rating: 4.7,
    students: 543,
    duration: "20시간",
    level: "중급",
    image: "/placeholder-lztdl.png",
    instructor: "최백엔드",
    category: "백엔드",
  },
  {
    id: 5,
    title: "디지털 마케팅 전략 수립",
    description: "SEO, SNS 마케팅, 구글 애즈까지 디지털 마케팅의 모든 것을 배워보세요.",
    price: "₩69,000",
    originalPrice: "₩99,000",
    rating: 4.6,
    students: 432,
    duration: "10시간",
    level: "초급",
    image: "/placeholder-rbvb6.png",
    instructor: "정마케팅",
    category: "마케팅",
  },
  {
    id: 6,
    title: "AWS 클라우드 아키텍처",
    description: "AWS 서비스를 활용한 확장 가능한 클라우드 인프라 구축을 배워보세요.",
    price: "₩119,000",
    originalPrice: "₩179,000",
    rating: 4.8,
    students: 321,
    duration: "25시간",
    level: "고급",
    image: "/placeholder-6nxsy.png",
    instructor: "한클라우드",
    category: "클라우드",
  },
]

export function CourseGallery() {
  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">인기 강의 둘러보기</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            전문가들이 직접 제작한 고품질 강의로 새로운 기술을 배우고 실무 역량을 키워보세요.
          </p>
        </div>

        {/* 강의 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{course.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur">
                      {course.level}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-balance leading-tight mb-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground text-pretty line-clamp-2">{course.description}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}명</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">{course.price}</span>
                        <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <div className="flex gap-3 w-full">
                  <Button
                    variant="outline"
                    className="flex-1 group-hover:border-primary/50 transition-colors bg-transparent"
                  >
                    강의 상세보기
                  </Button>
                  <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors">
                    즉시 결제
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* 더보기 버튼 */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            더 많은 강의 보기
          </Button>
        </div>
      </div>
    </section>
  )
}
