from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from apps.fishing.models import Fish, Weapon, Loot
from apps.fishing.serializers import FishSerializer, WeaponSerializer, LootSerializer

@api_view(['GET'])
def apiOverView(request):
    api_urls = {
        'Create':'/fish-create/',
        'Read':'/fish-list/',
        'Update':'/fish-update/<str:pk>/',
        'Delete':'/fish-delete/<str:pk>/',
        'Detail':'/fish-detail/<str:pk>/',
    }
    return Response(api_urls)

@api_view(['GET'])
def fishList(request):
    fishes = Fish.objects.all()
    serializer = FishSerializer(fishes, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def fishCreate(request):
    serializer = FishSerializer(data=request.data, many=True)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def fishDetail(request, fish):
    fishes = Fish.objects.get(id=fish)
    serializer = FishSerializer(fishes, many=False)
    return Response(serializer.data)

@api_view(['POST', 'GET'])
def fishUpdate(request, fish):
    fishes = Fish.objects.get(id=fish)
    serializer = FishSerializer(instance=fishes, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def weaponCreate(request):
    serializer = WeaponSerializer(data=request.data, many=True)

    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def lootCreate(request):
    serializer = LootSerializer(data=request.data, many=True)

    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
