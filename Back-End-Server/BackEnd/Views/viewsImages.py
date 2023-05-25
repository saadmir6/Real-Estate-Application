from ..models import Images
from ..serializer import ImagesSerializer
from rest_framework import status
from rest_framework.views import APIView
from django.http import JsonResponse


class FrontImages(APIView):
    def get(self, request):
        images = Images.objects.all()
        serialize = ImagesSerializer(images, many=True)
        return JsonResponse(serialize.data, safe=False)
    
    def post(self, request):
        api_serializer = ImagesSerializer(data = request.data)

        if api_serializer.is_valid():
            api_serializer.save()
            return JsonResponse(api_serializer.data, status = status.HTTP_201_CREATED)
        else:
            print("error", api_serializer.errors)
            return JsonResponse(api_serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    