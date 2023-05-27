from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from rest_framework import status
from rest_framework.views import APIView

class LoginView(APIView):    
    def api_login(request):
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, email=email, password=password)
        if user is None:
            return JsonResponse("fail", status = status.HTTP_400_BAD_REQUEST )
        else:
            login(request, user)
            return JsonResponse("success", status = status.HTTP_200_OK)

    def api_authenticate(request):
        if request.user.is_authenticated:
            return JsonResponse("granted", status=status.HTTP_202_ACCEPTED)
        else:
            return JsonResponse("not allowed", status = status.HTTP_401_UNAUTHORIZED)
