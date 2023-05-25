from ..models import Rent
from ..serializer import RentSerializer
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from django.http import JsonResponse

class CreateRentViews(CreateAPIView):
    parser_classes = [MultiPartParser, FormParser]
    serializer_class = RentSerializer
    def get(self, request):
        rent = Rent.objects.all()
        serialize = RentSerializer(rent, many=True)
        return JsonResponse(serialize.data, safe=False)

class RentPut(APIView):
    def put(self, request, id, *args, **kwargs):
        snippet = Rent.objects.get(id=id)
        serializer = RentSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)