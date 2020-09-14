from django.urls import path
from .views import PostListView, PostDetailView, PostCreateView, PostUpdateView, PostDeleteView
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('fishing/', views.fishing, name='fishing'),
    path('legal/', views.legal, name='legal'),
    path('blog/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('blog/<int:pk>/update/', PostUpdateView.as_view(), name='post-update'),
    path('blog/<int:pk>/delete/', PostDeleteView.as_view(), name='post-delete'),
    path('blog/new/', PostCreateView.as_view(), name='post-create'),
]
