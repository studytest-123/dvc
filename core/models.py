from django.db import models

class StudyProgram(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True, blank=True)

    def __str__(self):
        return self.name

    def short_description(self):
        if self.description:
            return self.description[:50] + "..." if len(self.description) > 50 else self.description
        return "No description provided."


