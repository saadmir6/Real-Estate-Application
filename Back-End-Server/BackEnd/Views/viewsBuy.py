from ..models import Buy, BuyImages
from ..serializer import BuySerializer, ImageSerializer
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from django.http import JsonResponse



        
class CreateBuyViews(CreateAPIView):
    parser_classes = [MultiPartParser, FormParser]
    serializer_class = BuySerializer
    def get(self, request):
        buy = Buy.objects.all()
        serialize = BuySerializer(buy, many=True)
        return JsonResponse(serialize.data, safe=False)

class BuyPut(APIView):
    def put(self, request, id, *args, **kwargs):
        snippet = Buy.objects.get(id=id)
        serializer = BuySerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    