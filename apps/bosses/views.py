from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from apps.bosses.models import Boss
from apps.bosses.serializers import BossSerializer


@api_view(['GET'])
def bossList(request):
    bosses = Boss.objects.all()
    serializer = BossSerializer(bosses, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def bossCreate(request):
    serializer = BossSerializer(data=request.data, many=False, partial=True)

    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST', 'GET'])
def bossUpdate(request, id):
    bosses = Boss.objects.get(id=id)
    serializer = BossSerializer(instance=bosses, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def bossDelete(request, id):
    boss = Boss.objects.get(id=id)
    boss.delete()

    return Response('Boss successfully deleted!')
