from django.shortcuts import render
from .models import Post


def home(request):
    return render(request, 'blog/home.html')

def about(request):
    return render(request, 'blog/about.html', {'title': 'About'})

def blog(request):
    context = {
        'posts': Post.objects.all()
    }
    return render(request, 'blog/blog.html', context)
