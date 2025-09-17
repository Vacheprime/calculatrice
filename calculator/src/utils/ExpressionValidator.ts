/**
 * Helper class used for checking whether characters can be added
 * to a mathematical expression without invalidating its syntax.
 */
class ExpressionValidator {
    /**
     * Determine whether an operator can be added at the end of the expression.
     * @param expr the current expression.
     * @returns A boolean indicating whether an operator can be added.
     */
    public static canAddOperator(expr: string, operator: string): boolean {
        // Handle empty expr
        if (expr.length == 0) {
            // Handle minus sign exception
            return operator == "-" ? true : false;
        }

        // Get last char of expr
        const lastChar: string = expr.at(expr.length - 1)!;

        // Handle decimal point
        if (lastChar == ".") {
            return false;
        }
        
        // Special case for the minus operator which can serve as negation
        if (operator == "-") {
            return lastChar != "-";
        }

        return this.isDigit(lastChar) || lastChar == ")";
    }

    /**
     * Determine whether a decimal can be added at the end of the expression.
     * 
     * @param expr the current expression.
     * @returns A boolean indicating whether a decimal point can be added.
     */
    public static canAddDecimal(expr: string): boolean {
        // Handle empty expr
        if (expr.length == 0) {
            return false;
        }
        // Get last char of expr
        const lastChar: string = expr.at(expr.length - 1)!;
        // Handle operator
        if (this.isOperator(lastChar)) {
            return false;
        }
        // Handle parenthesis
        if (lastChar == "(" || lastChar == ")") {
            return false;
        }
        // Get last number group
        const regex: RegExp = /[\d]+\.?([\d]+)?$/;
        const result: RegExpMatchArray | null = expr.match(regex);
        // Handle no match
        if (!result) {
            return false;
        }
        // Handle number group that already has a decimal
        return !result[0].includes(".");
    }

    /**
     * Determine whether a parenthesis can be added at the current position.
     * 
     * @param expr the current expression.
     * @param parenthesis the opening or closing parenthesis.
     * @returns A boolean indicating whether the parenthesis can be added.
     */
    public static canAddParenthesis(expr: string, parenthesis: string): boolean {
        // For opening parenthesis
        if (parenthesis == "(") {
            return this.canAddOpeningParenthesis(expr);
        } else {
            return this.canAddClosingParenthesis(expr);
        }
    }

    /**
     * Determine whether an opening parenthesis can be added at the current position.
     * @param expr the current expression.
     * @returns A boolean indicating whether the parenthesis can be added.
     */
    private static canAddOpeningParenthesis(expr: string): boolean {
        // Handle empty expr
        if (expr.length == 0) {
            return true;
        }
        // Get last char of expr
        const lastChar: string = expr.at(expr.length - 1)!;
        // Handle decimal point
        return lastChar != "."; 
    }

    /**
     * Determine whether a closing parenthesis can be added at the current position.
     * @param expr the current expression.
     * @returns A boolean indicating whether the parenthesis can be added.
     */
    private static canAddClosingParenthesis(expr: string): boolean {
        // Handle empty expr
        if (expr.length == 0) {
            return false;
        }
        
        // Get last char of expr
        const lastChar: string = expr.at(expr.length - 1)!;
        // Handle opening parenthesis
        if (lastChar == "(") {
            return false;
        }

        // Handle decimal point and empty operator 
        if (lastChar == "." || this.isOperator(lastChar)) {
            return false;
        }

        // Handle pairing of parenthesis
        let openingParenthesisCount = 0;
        let closingParenthesisCount = 0;
        // Count the occurances of opening and closing parenthesis
        for (let idx = 0; idx < expr.length; idx++) {
            const char: string = expr.at(idx)!;
            if (char == "(") {
                openingParenthesisCount++;
            } else if (char == ")") {
                closingParenthesisCount++;
            }
        }

        return closingParenthesisCount < openingParenthesisCount;
    }

    /**
     * Check if the character provided is an operator.
     * 
     * Operators checked are + - * /
     * 
     * @param char the character to check.
     * @returns a boolean indicating whether the character is an operator.
     */
    private static isOperator(char: string): boolean {
        const ops: string[] = ["+", "-", "*", "/"] ;
        return ops.includes(char);
    }

    /**
     * Check if the character provided is a digit.
     * @param char the character to check.
     * @returns a boolean indicating whether the character is a digit.
     */
    private static isDigit(char: string): boolean {
        return !isNaN(Number(char)); // is digit check by Copilot
    }
}

export default ExpressionValidator