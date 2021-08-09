from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from apps.characters.models import Character
from apps.characters.serializers import CharacterSerializer


@api_view(['GET'])
def characterList(request):
    characters = Character.objects.all()
    serializer = CharacterSerializer(characters, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def characterCreate(request):
    serializer = CharacterSerializer(data=request.data, many=True, partial=True)

    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
        
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST', 'GET'])
def characterUpdate(request, id):
    characters = Character.objects.get(id=id)
    serializer = CharacterSerializer(instance=characters, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def characterDelete(request, id):
    characters = Character.objects.get(id=id)
    characters.delete()

    return Response('Character successfully deleted!')
