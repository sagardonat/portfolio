from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.utils.translation import gettext_lazy as _

# Create your models here.

class new_contact (models.Model):
    username = models.CharField( max_length=50 , verbose_name=_("username"))
    company = models.CharField(max_length=300 , verbose_name=_("company"), blank=True, null=True)
    email = models.EmailField(verbose_name=_("email"))
    phone = PhoneNumberField(verbose_name=_("phone"))
    message = models.TextField(verbose_name=_("message"))
   
    class Meta:
        verbose_name = _("contact")
        verbose_name_plural = _("contacts")

    def __str__(self):
        return f"{self.username,self.company}" 
