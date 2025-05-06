"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"

export function SyllabusInfoForm() {
  const [syllabusData, setSyllabusData] = useState({
    objective:
      "Formar profissionais capazes de atuar no desenvolvimento de sistemas computacionais, utilizando tecnologias modernas e seguindo metodologias adequadas.",
    profile:
      "O egresso do curso de Tecnologia em Análise e Desenvolvimento de Sistemas será um profissional com competências para analisar, projetar, desenvolver e implantar sistemas computacionais.",
    methodology:
      "O curso utiliza metodologias ativas de ensino-aprendizagem, com aulas práticas em laboratório, desenvolvimento de projetos reais e estudos de caso.",
    evaluation:
      "A avaliação é contínua e formativa, utilizando diversos instrumentos como provas, trabalhos, projetos e participação em sala de aula.",
  })

  const [subjects, setSubjects] = useState([
    {
      id: 1,
      name: "Programação Orientada a Objetos",
      workload: "80h",
      semester: "2º",
      content:
        "Conceitos de orientação a objetos. Classes e objetos. Herança e polimorfismo. Encapsulamento. Interfaces. Tratamento de exceções. Padrões de projeto.",
    },
    {
      id: 2,
      name: "Banco de Dados",
      workload: "60h",
      semester: "3º",
      content:
        "Modelagem de dados. Modelo relacional. Linguagem SQL. Normalização. Índices e otimização. Transações. Segurança em banco de dados.",
    },
  ])

  const handleSyllabusChange = (field: string, value: string) => {
    setSyllabusData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubjectChange = (id: number, field: string, value: string) => {
    setSubjects((prev) => prev.map((subject) => (subject.id === id ? { ...subject, [field]: value } : subject)))
  }

  const addSubject = () => {
    const newId = subjects.length > 0 ? Math.max(...subjects.map((s) => s.id)) + 1 : 1
    setSubjects([
      ...subjects,
      {
        id: newId,
        name: "",
        workload: "",
        semester: "",
        content: "",
      },
    ])
  }

  const removeSubject = (id: number) => {
    setSubjects(subjects.filter((subject) => subject.id !== id))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informações da Ementa</CardTitle>
        <CardDescription>Edite as informações relacionadas à ementa do curso.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="general">
          <TabsList className="grid grid-cols-2 w-full max-w-md mb-6">
            <TabsTrigger value="general">Informações Gerais</TabsTrigger>
            <TabsTrigger value="subjects">Disciplinas</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="objective">Objetivo do Curso</Label>
              <Textarea
                id="objective"
                rows={3}
                value={syllabusData.objective}
                onChange={(e) => handleSyllabusChange("objective", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="profile">Perfil do Egresso</Label>
              <Textarea
                id="profile"
                rows={3}
                value={syllabusData.profile}
                onChange={(e) => handleSyllabusChange("profile", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="methodology">Metodologia de Ensino</Label>
              <Textarea
                id="methodology"
                rows={3}
                value={syllabusData.methodology}
                onChange={(e) => handleSyllabusChange("methodology", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="evaluation">Sistema de Avaliação</Label>
              <Textarea
                id="evaluation"
                rows={3}
                value={syllabusData.evaluation}
                onChange={(e) => handleSyllabusChange("evaluation", e.target.value)}
              />
            </div>
          </TabsContent>

          <TabsContent value="subjects" className="space-y-6">
            <div className="flex justify-end">
              <Button onClick={addSubject} className="bg-[#169e69] hover:bg-[#0e7e50]">
                <Plus className="mr-2 h-4 w-4" />
                Adicionar Disciplina
              </Button>
            </div>

            {subjects.map((subject) => (
              <Card key={subject.id} className="border border-muted">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-medium">Disciplina</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeSubject(subject.id)}
                      className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor={`subject-name-${subject.id}`}>Nome</Label>
                      <Input
                        id={`subject-name-${subject.id}`}
                        value={subject.name}
                        onChange={(e) => handleSubjectChange(subject.id, "name", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`subject-workload-${subject.id}`}>Carga Horária</Label>
                      <Input
                        id={`subject-workload-${subject.id}`}
                        value={subject.workload}
                        onChange={(e) => handleSubjectChange(subject.id, "workload", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`subject-semester-${subject.id}`}>Semestre</Label>
                      <Input
                        id={`subject-semester-${subject.id}`}
                        value={subject.semester}
                        onChange={(e) => handleSubjectChange(subject.id, "semester", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`subject-content-${subject.id}`}>Conteúdo Programático</Label>
                    <Textarea
                      id={`subject-content-${subject.id}`}
                      rows={3}
                      value={subject.content}
                      onChange={(e) => handleSubjectChange(subject.id, "content", e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}

            {subjects.length === 0 && (
              <div className="text-center p-6 border rounded-md bg-muted/50">
                <p className="text-muted-foreground">
                  Nenhuma disciplina cadastrada. Clique em "Adicionar Disciplina" para começar.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
