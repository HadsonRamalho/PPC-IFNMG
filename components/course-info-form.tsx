"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type CourseInfoFormProps = {
  courseData: {
    name: string
    code: string
    year: string
    duration: string
    modality: string
    coordinator: string
    description: string
  },
  onChange: (data: any) => void
}

export function CourseInfoForm({ courseData, onChange }: CourseInfoFormProps) {

  const handleChange = (field: string, value: string) => {
    onChange({
      ...courseData,
      [field]: value,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informações do Curso</CardTitle>
        <CardDescription>
          Edite as informações básicas do curso. Apenas os campos editáveis podem ser modificados.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="courseName">Nome do Curso</Label>
            <Input id="courseName" value={courseData.name} onChange={(e) => handleChange("name", e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="courseCode">Código do Curso</Label>
            <Input
              id="courseCode"
              value={courseData.code}
              onChange={(e) => handleChange("code", e.target.value)}
              disabled
            />
            <p className="text-xs text-muted-foreground">Este campo não é editável</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="courseYear">Ano do Documento</Label>
            <Input id="courseYear" value={courseData.year} onChange={(e) => handleChange("year", e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="courseDuration">Duração</Label>
            <Input
              id="courseDuration"
              value={courseData.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="courseModality">Modalidade</Label>
            <Select value={courseData.modality} onValueChange={(value) => handleChange("modality", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a modalidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Presencial">Presencial</SelectItem>
                <SelectItem value="EAD">EAD</SelectItem>
                <SelectItem value="Híbrido">Híbrido</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="courseCoordinator">Coordenador</Label>
            <Input
              id="courseCoordinator"
              value={courseData.coordinator}
              onChange={(e) => handleChange("coordinator", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="courseDescription">Descrição do Curso</Label>
          <Textarea
            id="courseDescription"
            rows={5}
            value={courseData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>

        <div className="p-4 border rounded-md bg-muted/50">
          <h3 className="font-medium mb-2">Estrutura do Documento</h3>
          <p className="text-sm text-muted-foreground">
            A estrutura do documento segue o padrão estabelecido pelo IFNMG. Os campos não editáveis são mantidos
            conforme o modelo original.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
