from django.urls import path, include
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator


class LoginRequiredMixin(object):
    @method_decorator(login_required)
    def dispatch(self, *args, **kwargs):
        return super(LoginRequiredMixin, self).dispatch(*args, **kwargs)


class LoginRequiredTemplateView(LoginRequiredMixin, TemplateView):
    pass


urlpatterns = [
    path('api/', include('training_logger.api.urls')),
    path('login', TemplateView.as_view(template_name='login.html')),
    path('', include('social_django.urls', namespace='social')),
    path('accounts/', include('django.contrib.auth.urls'))
]

home_view = LoginRequiredTemplateView.as_view(template_name='index.html')
home_paths = ['', 'home', 'charts', 'nutrition', 'view-logs']

for home_path in home_paths:
    urlpatterns = [path(home_path, home_view)] + urlpatterns
