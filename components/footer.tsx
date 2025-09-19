import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">EduPlatform</span>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              최고의 온라인 교육 플랫폼으로 여러분의 성장을 함께합니다.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* 강의 카테고리 */}
          <div className="space-y-4">
            <h3 className="font-semibold">강의 카테고리</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  프론트엔드
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  백엔드
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  데이터 사이언스
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  디자인
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  마케팅
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  클라우드
                </a>
              </li>
            </ul>
          </div>

          {/* 고객 지원 */}
          <div className="space-y-4">
            <h3 className="font-semibold">고객 지원</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  학습 가이드
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  기술 지원
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  환불 정책
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>

          {/* 연락처 정보 */}
          <div className="space-y-4">
            <h3 className="font-semibold">연락처</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@eduplatform.co.kr</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  서울특별시 강남구 테헤란로 123
                  <br />
                  에듀빌딩 10층
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 사업자 정보 */}
        <div className="border-t mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div className="space-y-1">
              <p>
                <strong>상호명:</strong> (주)에듀플랫폼
              </p>
              <p>
                <strong>대표자:</strong> 김교육
              </p>
              <p>
                <strong>사업자등록번호:</strong> 123-45-67890
              </p>
            </div>
            <div className="space-y-1">
              <p>
                <strong>통신판매업신고번호:</strong> 2024-서울강남-1234
              </p>
              <p>
                <strong>개인정보보호책임자:</strong> 박보안 (privacy@eduplatform.co.kr)
              </p>
              <p>
                <strong>호스팅 서비스:</strong> Amazon Web Services
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2024 EduPlatform. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
