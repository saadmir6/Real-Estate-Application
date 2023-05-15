from django.urls import path
from .Views import viewsAgent, viewsBuy

urlpatterns = [
    path('agents', viewsAgent.AgentsApi.as_view(), name="agents"),
    path('agents/<int:id>/', viewsAgent.AgentsPut.as_view(), name="agents"),
    path('buying', viewsBuy.CreateBuyViews.as_view(), name="buying"),
    path('buying/<int:id>/', viewsBuy.BuyPut.as_view(), name="buying"),
]
