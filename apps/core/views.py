from django.shortcuts import render, get_object_or_404
from django.contrib.admin.views.decorators import staff_member_required
from django.contrib.auth.models import User
from apps.fishing.models import Fish
from apps.characters.models import Character, Weapon
from apps.bosses.models import Boss
from apps.catalog.models import Cat
from apps.lordofmana.models import Friend

def home(request):
    return render(request, 'home.html')

@staff_member_required
def dashboard(request):

    context = {
        'characters': Character.objects.all().count(),
        'weapons': Weapon.objects.all().count(),
        'bosses': Boss.objects.all().count(),
        'fishes': Fish.objects.all().count(),
        'cats': Cat.objects.all().count(),
        'friends': Friend.objects.all().count()
    }
    return render(request, 'dashboard.html', context)

def characters(request):
    characters = Character.objects.all()

    context = {
        'characters': characters,
    }
    return render(request, 'characters.html', context)

def characters_detail(request, fullname):
    character = get_object_or_404(Character, fullname=fullname)
    characters = Character.objects.all()
    weapons = Weapon.objects.all()

    context = {
        'character': character,
        'characters': characters,
        'weapons': weapons
    }
    return render(request, 'characters_detail.html', context)

def bosses(request):
    return render(request, 'bosses.html')

def fishing(request):
    return render(request, 'fishing.html')

def catalog(request):
    return render(request, 'catalog.html')

def lord_of_mana(request):
    return render(request, 'lord_of_mana.html')

def legal(request):
    return render(request, 'legal.html')
