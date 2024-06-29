import os
import re

def lex(a):
    arq = []

    keys_specs = [
        ('VARIABLE', r'var'),
        ('SKIP', r'\s+'),
        ('NUMBER', r'\d+'),
        ('ID', r'\w+'),
        ('EQUAL', r'='),
        ('PLUS', r'\+'),
        ('OPEN_PARENTHESES', r'\('),
        ('CLOSED_PARENTHESES', r'\('),
        ('SEMICOLUMN',';'),
    ]

    tokens = []

    with open(a, 'r') as file:
        arq = file.readlines()
    for lines in arq:
        lines.replace('\n', '')
        word = ''
        pos = 0
        for char in lines:
            word += char
            for keys in keys_specs:
                if re.search(keys[1], char) and keys[0] == 'SKIP':
                    teste = word[0:pos+1].replace(' ', '')
                    word = ''
                    for keys in keys_specs:
                        if re.search(keys[1], teste):
                            tokens.append((keys[0], teste))
                            break
                elif re.search(keys[1], char) and keys[0] == 'SEMICOLUMN':
                    teste = word[0:pos+1].replace(';', '')
                    word = ''
                    for keys in keys_specs:
                        if re.search(keys[1], teste):
                            tokens.append((keys[0], teste))
                            tokens.append(('SEMICOLUMN ', ';'))
                            break
                elif re.search(keys[1], char) and keys[0] == 'OPEN_PARENTHESES':
                    teste = word[0:pos+1].replace('(', '')
                    word = ''
                    for keys in keys_specs:
                        if re.search(keys[1], teste):
                            tokens.append((keys[0], teste))
                            tokens.append(('OPEN_PARENTHESES', '('))
                            break
                elif re.search(keys[1], char) and keys[0] == 'CLOSED_PARENTHESES':
                    teste = word[0:pos+1].replace(')', '')
                    word = ''
                    for keys in keys_specs:
                        if re.search(keys[1], teste):
                            tokens.append((keys[0], teste))
                            tokens.append(('CLOSED_PARENTHESES', ')'))
                            break
            pos += 1
    return tokens


print(lex('a.kss'))