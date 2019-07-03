function print (str)
{
    alert(str);
}
function equals (a, b)
{
    if (a > b)
        return 1;
    else if (a < b)
        return -1;
    else if (a === 0 && b === 0)
        return 0;
}
function factorial (a)
{
    return (a !== 1) ? a * factorial(a - 1) : 1;
}
function join (a, b, c)
{
    return '' + a + b + c;
}
function geometry (a, b)
{
    return (b !== undefined) ? a*b : a*a;
}
function perfect (a)
{
    let result = null;

    for (let i = 1; i <= a / 2; i +=1) {
        if (a % i === 0)
            result += i;
    }

    if (result === a)
        return "perfect";
    return "not perfect";
}
function range (start, end)
{
    let result = '';
    for (let i = start; i < end; i++)
    {
        if (perfect(i) === "perfect")
            result += i + " ";
    }
    return result;
}
function time (hh, mm, ss)
{
    if (hh && mm && ss)
        return '' + hh + ':' + mm + ':' + ss;
    else if (hh && mm)
        return '' + hh + ':' + mm + ':' + '00';
    else if (hh && ss)
        return '' + hh + ':' + '00' + ':' + ss;
    else if (hh)
        return '' + hh + ':' + '00' + ':' + '00';
}
function seconds (hh, mm, ss)
{
    return (hh * 3600) + (mm *60) + ss;
}
function hours (ss)
{
    let hh = parseInt(ss / 3600);
    ss = ss - (hh * 3600);
    let mm = parseInt(ss / 60);
    ss = ss - (mm * 60);
    return '' + hh + ':' + mm + ':' + ss;
}
function difference (hh1, mm1, ss1, hh2, mm2, ss2)
{
    let day1 = seconds(hh1, mm1, ss1);
    let day2 = seconds(hh2, mm2, ss2);
    if (day1 < day2)
        return 'The first date is greater than the second one';
    else if (day1 === day2)
        return 'The dates are equal';
    else
        return hours(day1-day2);
}