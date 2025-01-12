from django.test import TestCase, Client
from .models import StudyProgram

class StudyProgramModelTest(TestCase):
    def setUp(self):
        self.program = StudyProgram.objects.create(
            name="Informatik",
            description="Ein Studiengang für IT und Computerwissenschaften mit Fokus auf Programmierung."
        )

    def test_str_method(self):
        self.assertEqual(str(self.program), "Informatik")

    def test_short_description(self):
        self.assertEqual(self.program.short_description(), "Ein Studiengang für IT und Computerwissenschaften mit F...")

    def test_short_description_no_description(self):
        program = StudyProgram.objects.create(name="Mathematik")
        self.assertEqual(program.short_description(), "No description provided.")


class StudyProgramViewTest(TestCase):
    def setUp(self):
        self.client = Client()
        StudyProgram.objects.create(name="Informatik", description="Ein Studiengang für IT.")
        StudyProgram.objects.create(name="Mathematik", description="Ein Studiengang für Zahlen.")

    def test_list_study_programs(self):
        response = self.client.get("/studyprograms/")
        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(
            response.content,
            [
                {"name": "Informatik", "description": "Ein Studiengang für IT."},
                {"name": "Mathematik", "description": "Ein Studiengang für Zahlen."}
            ]
        )
