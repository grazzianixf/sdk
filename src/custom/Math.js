class Math {
    static nextInteger(n) {
        let integer = Math.trunc(n);
    
        if (n > integer) {
            return ++integer
        }
    
        return integer
    }

    static round(n, e) {
        let multiplier = Math.pow(10, 2);

        return Math.round(n * multiplier) / multiplier;
    }
}