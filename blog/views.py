from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Post
from django.db.models import Sum
from users.api.fishing.models import Fish

def home(request):
    return render(request, 'blog/home.html')

def blog(request):
    context = {
        'posts': Post.objects.all()
    }
    return render(request, 'blog/blog.html', context)

@login_required
def fishing(request):
    context = {
        'fishes': Fish.objects.filter(user=request.user),
        'caught': Fish.objects.filter(user=request.user).aggregate(fishes=Sum('actual_catch')),
        'stones': Fish.objects.filter(user=request.user).aggregate(total=Sum('stones')),
    }
    return render(request, 'fishing/fishing.html', context)

class PostListView(ListView):
    model = Post
    template_name = 'blog/blog.html' # <app>/<model>_<viewtype>.html
    context_object_name = 'posts'
    ordering = ['-date_posted']

class PostDetailView(DetailView):
    model = Post

class PostCreateView(LoginRequiredMixin, CreateView):
    model = Post
    fields = ['title', 'content']

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)

class PostUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Post
    fields = ['title', 'content']

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)

    def test_func(self):
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False

class PostDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Post
    success_url = '/blog'

    def test_func(self):
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False

def TestView(request):
    current_user = request.user
    context = {'username': current_user.username,
                'current_user': current_user}
    return render(request, 'home.html', context)
