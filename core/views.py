from django.shortcuts import render
from django.http import JsonResponse
from .models import StudyProgram
from django.views.decorators.http import require_http_methods
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import StudyProgramSerializer

@require_http_methods(["GET"])
@api_view(['GET'])
def list_study_programs():
    programs = StudyProgram.objects.all()
    data = [{"name": program.name, "description": program.short_description()} for program in programs]
    serializer = StudyProgramSerializer(programs, many=True)
    return JsonResponse(data, safe=False)

