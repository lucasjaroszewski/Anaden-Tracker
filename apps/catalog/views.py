from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from apps.catalog.models import Cat
from apps.catalog.serializers import CatSerializer


@api_view(['GET'])
def catList(request):
    cats = Cat.objects.all()
    serializer = CatSerializer(cats, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def catCreate(request):
    serializer = CatSerializer(data=request.data, many=False, partial=True)

    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST', 'GET'])
def catUpdate(request, id):
    cats = Cat.objects.get(id=id)
    serializer = CatSerializer(instance=cats, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def catDelete(request, id):
    cat = Cat.objects.get(id=id)
    cat.delete()

    return Response('Cat successfully deleted!')
