# core/serializers.py
from rest_framework import serializers
from .models import StudyProgram

class StudyProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudyProgram
        fields = '__all__'
