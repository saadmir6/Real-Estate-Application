from django.urls import path
from .Views import viewsAgent

urlpatterns = [
    path('agents', viewsAgent.AgentsApi.as_view(), name="agents"),
    path('agents/<int:id>/', viewsAgent.AgentsPut.as_view(), name="agents"),
]
