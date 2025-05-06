"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ModeToggle } from "@/components/mode-toggle"
import { CourseInfoForm } from "@/components/course-info-form"
import { SyllabusInfoForm } from "@/components/syllabus-info-form"
import { CampusInfoForm } from "@/components/campus-info-form"
import { Save, ArrowLeft } from "lucide-react"
import { atualizar_documento } from "@/services/documentos"
import { InfoDocumento } from "@/interfaces/documentos"

export default function EditorPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("curso")
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    setSaving(true)

    const info: InfoDocumento = {
      info_curso: {
        nome_curso: "Curso Tecnologia em Análise e Desenvolvimento de Sistemas",
        sigla_curso: "TADS",
        quantidade_semestres: "6",
      },

      info_campus: {
        nome_campus: "Campus Araçuaí",
        cidade_campus: "Araçuaí",
        uf_campus: "MG"
      }

    };
    const res = await atualizar_documento(info);
    console.log(res);

    setSaving(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-[#169e69]">PPC-IFNMG</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={handleSave} className="bg-[#169e69] hover:bg-[#0e7e50]" disabled={saving}>
              {saving ? (
                "Salvando..."
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Salvar Alterações
                </>
              )}
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">
        <Tabs defaultValue="curso" className="w-full" onValueChange={setActiveTab} value={activeTab}>
          <div className="flex justify-between items-center mb-6">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="curso">Curso</TabsTrigger>
              <TabsTrigger value="ementa">Ementa</TabsTrigger>
              <TabsTrigger value="campus">Campus</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="curso" className="mt-6">
            <CourseInfoForm />
          </TabsContent>

          <TabsContent value="ementa" className="mt-6">
            <SyllabusInfoForm />
          </TabsContent>

          <TabsContent value="campus" className="mt-6">
            <CampusInfoForm />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} PPC-IFNMG</p>
          <p className="text-sm text-muted-foreground">Versão 1.0.0</p>
        </div>
      </footer>
    </div>
  )
}
