pm.test("Ожидаю статус ответа 200", function() {
    pm.response.to.have.status(200);
});

pm.test("Ответ за 200мс", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Создания персонажа без имени выдает ошибку", function () {
    pm.expect(pm.response.text()).to.include("Отсутствует имя персонажа(name)");
});

pm.test("Ожидаю в статусе ответа строку ОК", function () {
    pm.response.to.have.status("OK");
});

pm.test("В теле есть конкретная строка Sentinel-class landing craft", function () {
    pm.expect(pm.response.text()).to.include("Sentinel-class landing craft");
});

pm.test("Content-Type в хэдере", () => {
  pm.response.to.have.header("Content-Type");
});

const jsonData = pm.response.json();
pm.test("Тип тестовых данных", () => {
  pm.expect(jsonData.cost_in_credits).to.be.a("string");
  pm.expect(jsonData.length).to.be.a("string");
  pm.expect(jsonData.max_atmosphering_speed).to.be.a("string");
});