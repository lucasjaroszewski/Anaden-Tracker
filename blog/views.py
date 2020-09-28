from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.db.models import Sum
from users.api.fishing.models import Fish
from users.api.characters.models import Character

def home(request):
    return render(request, 'home/home.html')

def legal(request):
    return render(request, 'home/legal.html')

@login_required
def fishing(request):
    context = {
        'fishes': Fish.objects.filter(user=request.user),
        'caught': Fish.objects.filter(user=request.user).aggregate(fishes=Sum('actual_catch')),
        'stones': Fish.objects.filter(user=request.user).aggregate(total=Sum('stones')),
        'dimension_hook': Fish.objects.filter(user=request.user).aggregate(until=(1215-Sum('stones'))),
        'c_stones': Fish.objects.filter(user=request.user).aggregate(total=Sum('c_stones')),
    }
    return render(request, 'home/fishing.html', context)

@login_required
def characters(request):
    context = {
        'characters': Character.objects.filter(user=request.user),
    }
    return render(request, 'home/characters.html', context)

@login_required
def addCharacters(request):
    context = {
        'characters': Character.objects.filter(user=request.user),
    }
    return render(request, 'home/characters_add.html', context)

@login_required
def removeCharacters(request):
    context = {
        'characters': Character.objects.filter(user=request.user),
    }
    return render(request, 'home/characters_remove.html', context)

def TestView(request):
    current_user = request.user
    context = {'username': current_user.username,
                'current_user': current_user}
    return render(request, 'home.html', context)
