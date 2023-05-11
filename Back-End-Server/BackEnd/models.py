import pathlib
import uuid
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField




def unique_agent_image_id(instance, filename):
    fpath = pathlib.Path(filename)
    new_filename = str(uuid.uuid1())
    return f"Agent_Images/{new_filename}{fpath.suffix}"



class Agents(models.Model):
    name = models.CharField(max_length=100, default=''  )
    age = models.IntegerField()
    phone_number = PhoneNumberField(default="")
    email = models.EmailField(max_length=50,  )
    image = models.ImageField(upload_to=unique_agent_image_id, )