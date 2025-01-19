# core/urls.py
from django.urls import path
from .views import list_study_programs

urlpatterns = [
    path('studyprograms/', list_study_programs, name='list_study_programs'),
]
