from django.test import SimpleTestCase
from django.urls import reverse, resolve
from core.views import list_study_programs

class TestURLs(SimpleTestCase):

    def test_admin_url_is_resolved(self):
        """Test if the admin URL is reachable."""
        url = reverse('admin:index')
        self.assertEqual(resolve(url).url_name, 'index')

    def test_list_study_programs_url_is_resolved(self):
        """Test if the list_study_programs URL resolves to the correct view."""
        url = reverse('list_study_programs')
        self.assertEqual(resolve(url).func, list_study_programs)
