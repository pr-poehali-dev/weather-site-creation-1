import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const weatherData = {
    current: {
      temperature: 22,
      condition: "Ясно",
      humidity: 65,
      pressure: 1013,
      windSpeed: 12,
      windDirection: "СВ",
      feelsLike: 24,
      uvIndex: 6,
      visibility: 10,
    },
    hourlyForecast: [
      { time: "14:00", temp: 23, condition: "sunny" },
      { time: "15:00", temp: 24, condition: "sunny" },
      { time: "16:00", temp: 25, condition: "cloudy" },
      { time: "17:00", temp: 23, condition: "cloudy" },
      { time: "18:00", temp: 21, condition: "rainy" },
      { time: "19:00", temp: 19, condition: "rainy" },
    ],
    weeklyForecast: [
      { day: "Сегодня", high: 25, low: 18, condition: "sunny" },
      { day: "Завтра", high: 23, low: 16, condition: "cloudy" },
      { day: "Ср", high: 20, low: 14, condition: "rainy" },
      { day: "Чт", high: 22, low: 15, condition: "sunny" },
      { day: "Пт", high: 24, low: 17, condition: "cloudy" },
      { day: "Сб", high: 26, low: 19, condition: "sunny" },
      { day: "Вс", high: 28, low: 21, condition: "sunny" },
    ],
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny":
        return "Sun";
      case "cloudy":
        return "Cloud";
      case "rainy":
        return "CloudRain";
      default:
        return "Sun";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="CloudSun" size={28} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Погода</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="MapPin" size={16} className="mr-2" />
                Москва
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Settings" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="current">Сейчас</TabsTrigger>
            <TabsTrigger value="details">Детали</TabsTrigger>
            <TabsTrigger value="history">История</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-6">
            {/* Current Weather */}
            <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <Icon name="Sun" size={80} className="text-yellow-500" />
                  </div>
                  <h2 className="text-6xl font-light text-gray-800 mb-2">
                    {weatherData.current.temperature}°
                  </h2>
                  <p className="text-xl text-gray-600">
                    {weatherData.current.condition}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Ощущается как {weatherData.current.feelsLike}°
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Icon
                      name="Droplets"
                      size={24}
                      className="text-blue-600 mx-auto mb-2"
                    />
                    <p className="text-sm text-gray-600">Влажность</p>
                    <p className="text-lg font-semibold">
                      {weatherData.current.humidity}%
                    </p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Icon
                      name="Gauge"
                      size={24}
                      className="text-blue-600 mx-auto mb-2"
                    />
                    <p className="text-sm text-gray-600">Давление</p>
                    <p className="text-lg font-semibold">
                      {weatherData.current.pressure} мб
                    </p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Icon
                      name="Wind"
                      size={24}
                      className="text-blue-600 mx-auto mb-2"
                    />
                    <p className="text-sm text-gray-600">Ветер</p>
                    <p className="text-lg font-semibold">
                      {weatherData.current.windSpeed} км/ч
                    </p>
                    <p className="text-xs text-gray-500">
                      {weatherData.current.windDirection}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Icon
                      name="Eye"
                      size={24}
                      className="text-blue-600 mx-auto mb-2"
                    />
                    <p className="text-sm text-gray-600">Видимость</p>
                    <p className="text-lg font-semibold">
                      {weatherData.current.visibility} км
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hourly Forecast */}
            <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" size={20} className="mr-2" />
                  Почасовой прогноз
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 overflow-x-auto pb-4">
                  {weatherData.hourlyForecast.map((hour, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 text-center p-3 bg-blue-50 rounded-lg min-w-[80px]"
                    >
                      <p className="text-sm font-medium text-gray-600 mb-2">
                        {hour.time}
                      </p>
                      <Icon
                        name={getWeatherIcon(hour.condition)}
                        size={24}
                        className="text-blue-600 mx-auto mb-2"
                      />
                      <p className="text-lg font-semibold">{hour.temp}°</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Weekly Forecast */}
            <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Прогноз на неделю
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {weatherData.weeklyForecast.map((day, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-blue-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <Icon
                          name={getWeatherIcon(day.condition)}
                          size={20}
                          className="text-blue-600"
                        />
                        <span className="font-medium text-gray-800 min-w-[80px]">
                          {day.day}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-600">{day.low}°</span>
                        <div className="w-16 h-1 bg-gray-200 rounded-full">
                          <div
                            className="h-1 bg-blue-600 rounded-full"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                        <span className="font-semibold text-gray-800">
                          {day.high}°
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="details" className="space-y-6">
            {/* Detailed Weather Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
                <CardHeader>
                  <CardTitle>Атмосферные условия</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">УФ-индекс</span>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">
                        {weatherData.current.uvIndex}
                      </Badge>
                      <span className="text-sm text-orange-600">Высокий</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Точка росы</span>
                    <span className="font-semibold">16°</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Облачность</span>
                    <span className="font-semibold">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Вероятность осадков</span>
                    <span className="font-semibold">5%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
                <CardHeader>
                  <CardTitle>Качество воздуха</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      42
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      Хорошее
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">PM2.5</span>
                      <span className="text-sm font-semibold">12 μg/m³</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">PM10</span>
                      <span className="text-sm font-semibold">25 μg/m³</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">O3</span>
                      <span className="text-sm font-semibold">89 μg/m³</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Weather Map Placeholder */}
            <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
              <CardHeader>
                <CardTitle>Радар осадков</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon
                      name="Map"
                      size={48}
                      className="text-blue-600 mx-auto mb-4"
                    />
                    <p className="text-gray-600">Интерактивная карта погоды</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Скоро будет доступна
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            {/* Temperature History */}
            <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
              <CardHeader>
                <CardTitle>История температуры</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon
                      name="TrendingUp"
                      size={48}
                      className="text-blue-600 mx-auto mb-4"
                    />
                    <p className="text-gray-600">
                      График температуры за последние 7 дней
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Интерактивный график в разработке
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weather Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg">Средняя температура</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      20°
                    </div>
                    <p className="text-sm text-gray-600">За последние 7 дней</p>
                    <div className="mt-4">
                      <div className="flex justify-between text-sm">
                        <span>Мин: 14°</span>
                        <span>Макс: 27°</span>
                      </div>
                      <Progress value={65} className="mt-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg">Осадки</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      12мм
                    </div>
                    <p className="text-sm text-gray-600">За последние 7 дней</p>
                    <div className="mt-4">
                      <div className="flex justify-between text-sm">
                        <span>Дождливых дней: 3</span>
                      </div>
                      <Progress value={30} className="mt-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg">Влажность</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      68%
                    </div>
                    <p className="text-sm text-gray-600">Средняя за неделю</p>
                    <div className="mt-4">
                      <div className="flex justify-between text-sm">
                        <span>Мин: 45%</span>
                        <span>Макс: 85%</span>
                      </div>
                      <Progress value={68} className="mt-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
