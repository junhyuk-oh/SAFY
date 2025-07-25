"use client"

import { useState } from "react"
import { Breadcrumb } from "@/components/ui/display"
import { BackButton } from "@/components/ui/layout"
import { DocumentWizard } from "@/components/documents/shared"
import { useRouter } from "next/navigation"

export default function CreateDocumentPage() {
  const router = useRouter()
  const [isCreating, setIsCreating] = useState(false)

  const handleDocumentCreate = async () => {
    setIsCreating(true)
    
    // 여기서 API 호출로 문서 생성
    // 예: await createDocument(data)
    
    // 임시로 2초 대기 (실제로는 API 호출)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsCreating(false)
    // 생성 완료 후 문서 목록으로 이동
    router.push("/documents")
  }

  return (
    <>
            {/* Page Header */}
            <div className="mb-6">
              <Breadcrumb 
                items={[
                  { label: '홈', href: '/' },
                  { label: '문서 관리', href: '/documents' },
                  { label: '새 문서 만들기' }
                ]}
                className="mb-4"
              />
              <BackButton href="/documents" label="문서 관리로 돌아가기" className="mb-4" />
              <h1 className="text-2xl font-bold text-text-primary">새 문서 만들기</h1>
              <p className="text-text-secondary mt-1">단계별 가이드를 따라 안전 문서를 쉽게 생성하세요</p>
            </div>

            {/* Document Creation Wizard */}
            <DocumentWizard onComplete={handleDocumentCreate} />

            {/* Creating Overlay */}
            {isCreating && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-background-secondary rounded-notion-lg p-8 max-w-sm mx-auto text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    문서를 생성하고 있습니다...
                  </h3>
                  <p className="text-sm text-text-secondary">
                    AI가 입력하신 정보를 바탕으로 문서를 자동 생성 중입니다.
                  </p>
                </div>
              </div>
            )}
    </>
  )
}