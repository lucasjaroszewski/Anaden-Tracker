from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from apps.lordofmana.models import Friend
from apps.lordofmana.serializers import FriendSerializer


@api_view(['GET'])
def friendList(request):
    friends = Friend.objects.all()
    serializer = FriendSerializer(friends, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def friendCreate(request):
    serializer = FriendSerializer(data=request.data, many=False, partial=True)

    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST', 'GET'])
def friendUpdate(request, id):
    friends = Friend.objects.get(id=id)
    serializer = FriendSerializer(instance=friends, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def friendDelete(request, id):
    friend = Friend.objects.get(id=id)
    friend.delete()

    return Response('Friend successfully deleted!')
