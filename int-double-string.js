const type = gets();
let value = gets();

switch (type) {
    case 'integer':
    value = Number(value);
    value = value + 1.00;
    print(value);
        break;
    case 'real':
    value = Number(value);
    value += 1;
    print(value.toFixed(2));
        break;
    default:
    value = value + '*';
    print(value);
        break;
}

