# Полезные команды для работы с Kubernetes и ArgoCD

## Kubernetes

- **Получить все поды во всех неймспейсах:**
  ```bash
  kubectl get pods -A
  ```
- **Получить все сервисы:**
  ```bash
  kubectl get svc
  ```
- **Получить все деплойменты:**
  ```bash
  kubectl get deployments
  ```
- **Посмотреть логи пода:**
  ```bash
  kubectl logs <имя-пода>
  ```
- **Применить все манифесты из папки:**
  ```bash
  kubectl apply -f ./k8s
  ```
- **Удалить все ресурсы из папки:**
  ```bash
  kubectl delete -f ./k8s
  ```
- **Порт-форвардинг для доступа к сервису:**
  ```bash
  kubectl port-forward svc/<имя-сервиса> <локальный-порт>:<порт-сервиса>
  ```

## ArgoCD

- **Запустить порт-форвардинг для доступа к ArgoCD UI:**
  ```bash
  kubectl port-forward svc/argocd-server -n argocd 8080:443
  ```
  После этого UI будет доступен по адресу: https://localhost:8080

- **Получить пароль администратора ArgoCD:**
  ```bash
  kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo
  ```
  Логин: `admin`

- **Синхронизировать приложение вручную (если не включён auto-sync):**
  В UI ArgoCD выбери приложение и нажми кнопку **Sync**.

- **Проверить статус приложения:**
  В UI ArgoCD или командой:
  ```bash
  argocd app get <имя-приложения>
  ```

---

> **Примечание:**
> Все команды выполняются из корня репозитория или с учётом структуры вашего проекта. 