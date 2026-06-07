/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
if (isAdmin & (hasSpecialPermission || hasTemporaryPass)) {
    isAccess = true;
} else if (isVerifiedUser & (hasSpecialPermission || hasTemporaryPass)) {
    isAccess = true;
} else if (!isVerifiedUser & (hasSpecialPermission || hasTemporaryPass)) {
    isAccess = false;
}

// your code
