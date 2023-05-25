# from django.contrib.auth.models import User
# from django.http import JsonResponse
# from rest_framework import status
# from rest_framework_simplejwt.tokens import RefreshToken
# from rest_framework.decorators import api_view

# @api_view(['POST'])
# def login(request):
#     email = request.data.get('email')
#     password = request.data.get('password')

#     try:
#         user = User.objects.get(email=email)
#     except User.DoesNotExist:
#         return JsonResponse({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

#     if not user.check_password(password):
#         return JsonResponse({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

#     refresh = RefreshToken.for_user(user)
#     return JsonResponse({
#         'access': str(refresh.access_token),
#         'refresh': str(refresh),
#     })
