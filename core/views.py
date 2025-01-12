from django.shortcuts import render
from django.http import JsonResponse
from .models import StudyProgram

def list_study_programs():
    programs = StudyProgram.objects.all()
    data = [{"name": program.name, "description": program.short_description()} for program in programs]
    return JsonResponse(data, safe=False)

