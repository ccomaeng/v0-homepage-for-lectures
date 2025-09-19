"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Menu, X, BookOpen, User, Search } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">EduPlatform</span>
          </div>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-foreground hover:text-primary transition-colors">
              강의
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              소개
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              문의
            </a>
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
          </nav>

          {/* 로그인 버튼 */}
          <div className="hidden md:flex items-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  로그인
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>로그인</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input id="email" type="email" placeholder="이메일을 입력하세요" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">비밀번호</Label>
                    <Input id="password" type="password" placeholder="비밀번호를 입력하세요" />
                  </div>
                  <Button className="w-full">로그인</Button>
                  <div className="text-center text-sm text-muted-foreground">
                    계정이 없으신가요?{" "}
                    <a href="#" className="text-primary hover:underline">
                      회원가입
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button size="sm">무료 체험</Button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#courses" className="text-foreground hover:text-primary transition-colors">
                강의
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                소개
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                문의
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <User className="h-4 w-4 mr-2" />
                      로그인
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>로그인</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="mobile-email">이메일</Label>
                        <Input id="mobile-email" type="email" placeholder="이메일을 입력하세요" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mobile-password">비밀번호</Label>
                        <Input id="mobile-password" type="password" placeholder="비밀번호를 입력하세요" />
                      </div>
                      <Button className="w-full">로그인</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button size="sm">무료 체험</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
