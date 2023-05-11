from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.parsers import JSONParser
from ..models import Agents
from ..serializer import AgentsSerializer

class AgentsApi(APIView):

    def get(self, request, *args, **kwargs):


        agent = Agents.objects.all()
        serialize = AgentsSerializer(agent, many=True)
        return JsonResponse(serialize.data, safe=False)
    
    def post(self, request, *args, **kwargs):

        api_serializer = AgentsSerializer(data = request.data)

        if api_serializer.is_valid():
            api_serializer.save()
            return JsonResponse(api_serializer.data, status = status.HTTP_201_CREATED)
        else:
            print("error", api_serializer.errors)
            return JsonResponse(api_serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        
class AgentsPut(APIView):
    def put(self, request, id, *args, **kwargs):
        snippet = Agents.objects.get(id=id)
        serializer = AgentsSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
