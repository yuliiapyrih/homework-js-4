// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.
let energy=0;
let series=1;
function wakeUp(isAlarmClock,cb) {
    setTimeout(()=>{
        if (isAlarmClock) {
            energy=25;
            cb(null,energy);
        }else{
            cb('Упс, я проспала');
        }
    },250)
}
function breakfast(isFood,cb) {
    setTimeout(()=>{
        if (isFood) {
            energy+=400;
            cb(null,energy)
        }else{
            cb('я тепер голодна буду');
        }
    },2000)
}
function brushTeeth(energy,cb) {
    setTimeout(()=>{
        if (energy>200) {
            energy-=150;
            cb(null,energy)
        }else{
            cb('Мої зуби(((');
        }
    },1000)
}
function watchSeries(series,cb) {
    setTimeout(()=>{
        if (series<2) {
            series-=1;
            cb(null,'Я ще все встигну зробити')
            
        }else{
            cb('Знов засіла за серіалом');
        }
    },4000)
}

function readWithBrother(energy,cb) {
    setTimeout(()=>{
        if (energy>300) {
            console.log('');
            energy-=205;
            cb(null,energy)
        }else{
            cb('Брат не хоче читати, або я');
        }
    },1500)
}

function lunch(isFood,cb) {
    setTimeout(()=>{
        if (isFood) {
            energy+=500;
            cb(null,energy)
        }else{
            cb('Я обезсилений хомяк');
        }
    },500)
}

function helpMom(energy,cb) {
    setTimeout(()=>{
        if (energy>350) {
            energy-=300;
            cb(null,energy)
        }else{
            cb('Я не стягну цю роботу');
        }
    },7000)
}
function readBook(isBook,cb) {
    setTimeout(()=>{
        if (isBook) {
            energy+=105;
            cb(null,energy)
        }else{
            cb('Книжки закінчилися');
        }
    },3000)
}
function shower(isHotWater,cb) {
    setTimeout(()=>{
        if (isHotWater) {
            cb(null,'Є, я везунчик')
        }else{
            cb('Чому так часто пропадаєш?');
        }
    },2500)
}
function sleep(energy,cb) {
    setTimeout(()=>{
        if (energy===0) {
            cb(null,'Я вже всьо')
        }else{
            cb('Я ще повна сил, йду гуляти');
        }
    },0)
}

wakeUp(true,(err,energy)=>{
    if (err) {
        console.log(err);
    }else{
        console.log(energy);
        breakfast(true,(er,energy)=>{
            if (er) {
                console.log(er);
            }else{
                console.log(energy);
                brushTeeth(energy,(er1,energy)=>{
                    if (er1) {
                        console.log(er1);
                    }else{
                        console.log(energy);
                        watchSeries(series,(er2,mesagge)=>{
                            if (er2) {
                                console.log(er2);
                            } else {
                                console.log(mesagge);
                                readWithBrother(energy,(err,energy)=>{
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        console.log(energy);
                                        lunch(true,(err,energy)=>{
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                console.log(energy);
                                                helpMom(energy,(err,energy)=>{
                                                    if (err) {
                                                        console.log(err);
                                                    } else {
                                                        console.log(energy);
                                                        readBook(true,(err,energy)=>{
                                                            if (err) {
                                                                console.log(err);
                                                            } else {
                                                                console.log(energy);
                                                                shower(true,(err,mesagge)=>{
                                                                    if (err) {
                                                                        console.log(err);
                                                                    } else {
                                                                        console.log(mesagge);
                                                                        sleep(energy,(err,mesagge)=>{
                                                                            if (err) {
                                                                                console.log(err);
                                                                            } else {
                                                                                console.log(mesagges);
                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});

let energy=0;
let series=1;
function wakeUp(isAlarmClock) {
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (isAlarmClock) {
                energy=25;
                resolve(energy);
            }else{
                reject('Упс, я проспала');
            }
        },250);
    });
    
}
function breakfast(isFood) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (isFood) {
                energy+=400;
                resolve(energy)
            }else{
                reject('я тепер голодна буду');
            }
        },2000)
    });
    
}
function brushTeeth(energy) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (energy>200) {
                energy-=150;
                resolve(energy)
            }else{
                reject('Мої зуби(((');
            }
        },1000);
    });
    
}
function watchSeries(series) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (series<2) {
                series-=1;
                resolve('Я ще все встигну зробити')
                
            }else{
                reject('Знов засіла за серіалом');
            }
        },4000); 
    });
    
}

function readWithBrother(energy) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (energy>300) {
                energy-=205;
                resolve(energy)
            }else{
                reject('Брат не хоче читати, або я');
            }
        },1500);
    });
    
}

function lunch(isFood) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (isFood) {
                energy+=500;
                resolve(energy)
            }else{
                reject('Я обезсилений хомяк');
            }
        },500);
    });
    
}

function helpMom(energy) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (energy>350) {
                energy-=300;
                resolve(energy)
            }else{
                reject('Я не стягну цю роботу');
            }
        },7000);  
    });
    
}
function readBook(isBook) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (isBook) {
                energy+=105;
                resolve(energy)
            }else{
                reject('Книжки закінчилися');
            }
        },3000); 
    });
    
}
function shower(isHotWater) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (isHotWater) {
                resolve('Є, я везунчик')
            }else{
                reject('Чому так часто пропадаєш?');
            }
        },2500);
    });
    
}
function sleep(energy) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (energy===0) {
                resolve('Я вже всьо')
            }else{
                reject('Я ще повна сил, йду гуляти');
            }
        },0); 
    });
    
}


wakeUp(true)
.then(value=>{
    console.log(value);
    return breakfast(true);
})
.then(value=>{
    console.log(value);
    return brushTeeth(energy);
})
.then(value=>{
    console.log(value);
    return watchSeries(series);
})
.then(value=>{
    console.log(value);
    return readWithBrother(energy);
})
.then(value=>{
    console.log(value);
    return lunch(true);
})
.then(value=>{
    console.log(value);
    return helpMom(energy);
})
.then(value=>{
    console.log(value);
    return readBook(true);
})
.then(value=>{
    console.log(value);
    return shower(true);
})
.then(value=>{
    console.log(value);
    return sleep(energy);
})
.catch(reason=>{
    console.error(reason);
});

async function routine() {
    try {
        let point1=await wakeUp(true);
        console.log(point1);

        let point2=await breakfast(true);
        console.log(point2);

        let point3=await brushTeeth(point2);
        console.log(point3);

        let point4=await watchSeries(series);
        console.log(point4);

        let point5=await readWithBrother(point3);
        console.log(point5);

        let point6=await lunch(true);
        console.log(point6);

        let point7=await helpMom(point6);
        console.log(point7);

        let point8=await readBook(true);
        console.log(point8);

        let point9=await shower(true);
        console.log(point9);

        let point10=await wakeUp(point8);
        console.log(point10);
    } catch (error) {
        console.log(error);
    }
}

routine();