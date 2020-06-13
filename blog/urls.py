from django.urls import path
from .views import PostListView, PostDetailView, PostCreateView, PostUpdateView, PostDeleteView
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='blog-about'),
    path('blog/', PostListView.as_view(), name='blog'),
    path('blog/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('blog/<int:pk>/update/', PostUpdateView.as_view(), name='post-update'),
    path('blog/<int:pk>/delete/', PostDeleteView.as_view(), name='post-delete'),
    path('blog/new/', PostCreateView.as_view(), name='post-create'),

]
