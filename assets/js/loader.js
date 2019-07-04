class simpleLoader {
    constructor(){
        this.g=document.querySelector.bind(document);
        this.gA = document.querySelectorAll.bind(document);
        this.imgSrc = `data:image/gif;base64,R0lGODlhgACAAPUvADQyNJyanMzOzGRmZLS2tOzq7ISChExOTKyqrNze3MTCxPT29KSipNTW1GxubLy+vPTy9IyKjFRWVLSytOTm5Hx+fMzKzPz+/JSWlJyenNTS1GxqbLy6vOzu7ISGhKyurOTi5Hx6fMTGxPz6/JSSlGRiZKSmpNza3HRydFxaXFRSVHR2dDQ2NIyOjDw6PERGRERCRDw+PExKTFxeXP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCAAvACwAAAAAgACAAAAG/8CXcEgsGo/IpNIIeWQyisVySq1ar9hsUWCodLsJrXhMLldB3nS6YG6739ZL66uuMOD4fL5QD6mleoGCWmh0hh2DiYpLCYaHi5CRQoV9YJKXSBcNEwEfFoBZjZVebIQIFQ4kIheYWiMfARixsaVYoqOIoQO7vCQjrVgcssOzEKGjfrlXFBu8Jc0DJsBxxNUPx45rWRHPzrzG01MNs9W0ttnay97eAuHi5PCyrFaU2cpUIyHr0AMK7ozx4IWhhy7ZFQL7ug048U/Jq3LVQL0reI8RP4XOfjVMogEiOQsEkVVUEiBhNxEbHZoISAycOGQGalk0WSJmSiUJWM4icKZghf+RR+TQXHhTpcdhMjnCBGrEAsZ1AYoC1ClvIjqmRPINxSpViIKjsRpYtTcFwVOMPLsapapRqciZNNuqRdKRKkicS5eUPMvr7twkD8G6PHKrEtcTfLtFmPeXI1gMaenmzYSKJojGZaliuCzZD1m6Q+9gXgJBswm5ROp5TsfEwdbRE3Vq6LyaDlOzNCNPW0AhQQHGWRY8EUzYZ9JJQ0OgXiZiQhQxIwQ4nw4C+DLN/lq/NUIi8a7ZplQcGH8ggER8Cjip/+CcK2AEj0dC0ED/N4QCIOo3DS1GQQnyANpED3sETjfdeVRQYJp1WGjl3XEvASjhAdlVkZ6BBarXwHJLCCP/G4fUuHYRLwg0SMKEExpw0HoYZkgBg+9BdAKMrjyAwlmDkTaBeCi6AGAJK7KYoYtWWCAQjWQsgJBCFYozQI8oonCdkEOuJwCIRQgnCwc54sHHLgLOBCWKop1BAJVVrufbOwwpcgEHJbSp0pg9pgAhTmemiWZ7pHU5CAU6SkAniiqA12Bzeuq5CmwNbDBolHeauWeiGmDZEAUePDphnG1okmeiLRJQnVTC8agpeRNYGpx0k+oZaSsPpHAqgOYF0gGioU6KIDAnzEpeCJz9yQGoLA60UQCzcgqJp8TymdIC/z2aKiYLsJroru70Smetu134qYZqMQAlsA0xOySS7kBA/2iT5W5ioLFdIUurn+0SqGq6v7660a3whouCnJhdcO8/CwwM28EIJ6zwwgw37HDDAhcs8QgTV0zxxRYj3IFvHHfs8ccfL1etBQKQbHLJKJ+scsol0xsuADDHLPPMNNNM1CQsr6xzzixjq5YINbMQ9NBCw3zNyDzvrHTKBu9L9NND45f01EubjC6pUGc9cwYnVE311FcXRYHWZAOwQgNfe61z2DcVULbWZ6ctt8psP/t21hkgrfbcTV9a9N1Rv1DA3IT73BXQgA99Dc57q+3y4YnXbCcTGFtcueWVawzy5pxz/PDnoIcu+uikl2664HWHI/DBFwf8m+u9vfiXJrGnfv9JxPnlZzjBtb9ou5u89a67WrQL3/cgFAuv++674Vfd8r6rfp/yvZMKPfW/dzr99coXJTD1ymc/RvLgc992+eEDj77zwu+7PvvV64H7++3vSz798bsxP/foi5/I/vzDnv+yBD/83Wd22zPg68ZXwAZiDzb3CyD/xBdBBz4vf5k4XhmuBkADNkiBvrsXbzToiulNoYP0W4YEJ4gP9g2whbWDoQJV6MEzGG8PCZRdFSqIPhpa8IJN42H0tPfAHQbvfT4s3+82psQk5bB+cXii+aL4Qw0KEYPB+WFvrKhF5mXFgiT8ngRFhjmJUa6HJSwiFXvnvyOq8YsSJEz/oPPENmLzjIEr5NAVdUjAOdLxPiT0kh/P+EY4xvFzxRNgJpoYFCQ+jIngw9IeJTlIhu2Rj42MJGC6GMhycdIhjFxkHi05SlAGUFVSxCIEHblJTZpyjApL5fJOCMs+hXKVpXylA2mZS9jdspWFFKUrR3NJ9wxhkjI8JTE/mcwbNrOBL1xWJW3JQhte0JlzSWQwgZk+I07Te73kpQP7JsstIrCW3qxmOtXZFTdOcY38++Aw2znPdWKTHvW0XjevgEx53pN4u8xiPp+5wMbsz44DTSbFTsfNdzLUVr98qCATKlEibrOiFnUoRieq0Y3CwZ2Y9CgOARlNSAQBACH5BAUIAC4ALAAAAACAAGMAAAb/QJdwSCwaj8ik8miZTASjpXRKrVqv2OIpgwl0M5SseEwuUyne9LdjbrvfVsRXHZjA73h8hz7HRPOAgVlofWoQgoiJS4R8XoeKkJEujIV+kpdJICJPDX9YlHyPnwQYBgwCmGMKH06tbJ+VaaJWDQa2twypWE2trE6eVaB9s1W3xhUEusG+va2wjV3EUxkVx7fKZ83ME6/LsZa01eLHDdhSJ9rbVwXfAdJKCy3j8wao5vDpzCC00I7h9Mb23VNCIJ8rb9DeJbFG78JAJQm2aTuBsJLCIx8AhhCn4SE+g7/O9AN3TqMxhx4zgXwi8tvFIl5MVhCYMskmkN0gjnw5RINM/1M1F0nUNoVdP56TIvxEWlPDygTn2k158FNBUCkjCg71FdXlIobzrhZ9KtQrwapisXJYuUCnWSQJwOJKOxakBbcJlZSSO5Pu1K1aC2TaaROtX7UrB7814mHp4SkNADuhqYUwRsPYRnQowDRJ1sRHhBlCwrdaGQEPLOS0ciGBBdSoV9OS/KGjEdFrLsukmCXrhgHAB5gAlg3269edi1xYhfO2680LIGw+kYD4pJ+5slhYEbzEb+HrjhuHXX0UbTPydsPq7r39hrvLxMtHjrIKL63bTtQXw6GxxmSsMcCee99hQMt8CEIRYDphvGGBUta0ZZ8DA1YYwoEJIighZM1QYP+dGVnNAx9kIVRoYgQYZjiealR89sSHcFBjy36DmfgdgSXYkeKKPMZGY2gEUCaIAn1JgQCONrqXnBAQqKiibOYItgSRSdrI2zrU9ailAPo9dl2VJ0IZjAZO9ihkUOyAaeGVZVBA5pZm/niPb2riqICcZLhWpoYpbVcngQhseMcCWe4pHoyYJPBndyQ0KEgHbxoq5UNH/lmPJG4aGlSJaj6AaCCawcliUzeaiECUha4o5j0f2BiBo6giSFepwIVgm0etyTfpVa26x4GgKYWKHF0dBOfOYU3CKpYJr3rJJLLORivttNRWa+212GY7xAWadcvtt96GCy630koHwrnopqv/7rrqGqGZm/DGK++89H4aFAEHyJDvvvr2y++//ua7Ak2E0suuwfPa21TAADfMcMAiuPCuhwdzRvHFFmd8Lp5iJfCwwyAzDF3FCJesLLIfpxxyv4Ga7DK95aosM8ivvkwyxudOu/LMD9ds888x7yy0vy3/bDPHV3k89NJM3qwxzvVGKwDPS6tgVdNGm6xwn1TzjIJn44YttrjlOp2A09qmrfbabLft9ttwRxm3Mh6UUM7cmAKgd5F4J0KC3izozQCwfQ8aOOB6y3B14XhggPjjA0DF+BsgHP444s1OXsYIKVju+eOBaj5GBpd/jrgEEYt+hQalt464AyerThAMrtfeWajsIple++EA4l7S7rqnYI/vU0oAvOl8E49EVjHovvutyi/fgvO17xp9aA4cj/n1Rh5APeTcY2VC88AfED6J3wPgwPlndO567+x3j3z8AZK/N+H0lxXkEkEAACH5BAUIACsALAgAAAB4AHgAAAb/wJVwSCwaj8gkcnESiU7KqHRKrVqvRgph8uESOtiweEyOdrzob3nNbks5abR7TmdD4vK6fl8947kLfIKDWV2GhxOBhIuCfn+KjJFDHU0NFGOOiFuQV3cIGWqSVJUCFqWcVn+AYQkZARivGByiUqSmt6yqH6hTHa6wwLK0SUy3pccJWJlxvG/Bz83DBcjUAhCdutHEz7GwycNZ1dTYqtpHIybd6hhQ4EUQxvGnVsuI5kYC6+qX7kXi1Bf6ZBPI7Vm/cP9M8es1kMoDfcHaHSSiQV68EaMa1iqoDuNEIpQsIstYziHEWAs/ThJ57FotjUpOnIQ1S+W7hMcYljTz6+S9/34gcFp7qcnQTwscgQmwiUToUjMwkcx8xXSJU6g7kzxMGkBiVX8sTXlcEvUdV2Ffz4U1FbMskU8z0yaxJc7lObdCGkxVIHfu2oB3s5qd2tdv2AJkBVM8q0HShQWQy1wN/OjcVBOSn9hVAoGC58+Y1oKgjKcZgamjxSgwUIF1BQJmPoOQPfZKg79HPkMe0dlz7rOwWbVo7bo15iW0ZftWNplMOq6bq2QoTtx1A+SzsxfQvpwezgK1hZ8Uga26+RDGsXNXDrqPyA7hyegt6J26/erq2a8H794Y/zr5dOMVT+cVmJ5a+u2nWy8VlTLIGTTFZ5mBFD6Qn4IJMgjGIhqwI/8FOhSGyNl2GJJoYnYfOuZMiBR+M2KCJf5XWF4Y3IdeiAhER8yJMOoHmFxnsHijeR520mOMcq0m5H1PhfFYjDyayFSHS57HgYRGHqmgTSBUOWQIDGzYBm9Q0sYUB14aQIKLdPQWJY9VjTCcjdRZ8KCbMP7IJZ2uJcIImQliORGaNoZJC6An9iVngQOKgmd3aRFqnaCOSalon3HK2BcXKc34VWSehirqqKSWauqpqKaq6k1aaknpqlEoMMAGJcxaK6225orrrrcOEEGnsE7RgK7EFttrsU0G24uxzDZrq47KJnHstNQ6O0Bw0ZphbbXNBpDth9xua6y333ImLq/O1lT/7hLnnrtuTO1ua+e7TcXbLbD0gtTqmwvm6++/AAcs8MAEF0wICSg0arAYBzTcgpgLh8FAwxTvEnEYFGdcwrwXUzFxxhp3TAXIJB8QALQiC4FCySX7mfJbLLO8QbIinxDzzQa8vMIID6Twws0wtKwzOkDHrG7KERQdNMgOXPeyBRsoTXILArNZr9QgO51vBgDQbBnWGUP8bQIDAMCCCq/SCPYLCKy7ANdmm922QyVgjcK3b8MQ995iczaBCkqXEC0EJMSwNwt7R9BJ4UDnrOwCBxwueWr0rGx0tgpIfrgDqtW9NOAHGJB2qQ5ovjdfTiIAusMoq5oA4qaf/RMxCiCgfADl5UYQu9w6L2H47n33vgICuwPggfBGjCBB8Vojn1fxKThfRAiwm46t9K8XP/vFhe+egfST/B47YuAPX73mIZSvMvPqa3C+5BKMfjH175/efv2Hyx8x3LF7LTzk3lOf+fonwBWUYHwFzJ7kjlfAAe5tANt7mgeWd609BAEAIfkEBQgALQAsHQAAAGMAgAAABv/AlnBILBqPxBHl1Cggn9CodEqttjqCrBZi7Xq/YIh2bBmBz+j0UGMht0/quHw6ersF87w+eX+b94BxYnaEf4GHYX1ZhohqCwVLEBeJhGOMXQ0KBBYghxeQkZFfg32XVBQEHxOqH2WAHaEgol6kla5dEKmru617SrLAwbSKt1aavLy+oLGzVbVuplGorNSrTnkQzLG4xNFQD8jVndjawd5Iz4VWJ9XhHXqf5sGyVumWzrr5yK/ly87dVQSEQ0Yh0LJ+pwDSGYhsEr9+9BbaWkTlWDtW7zzJi3WOz8RiUEBcpIYH0a+NwCSWmqJvYCMh2SAukGLPj5RMDK29vCKTgsP/JzUphsyJcSdPmdIUPhFItKDRo/OEhVSKhGivp1ARAqVa5AK4kaq4YM2q7VxQkEUSWNUwFiZKqUfOnuMANmxbt0jjcl2z9i7eqOb0foyWy+rPYWxmjnqb0ojcIyIMnxGQIQAGyyISAQ7lGNajEaA/H4bZ94tay6gxL86L5mtOxfUmXJ6dOkCC1ZsloalDl2EDLwpq057NQTPH0WhEulzHYLhw1GE4GiSIz7l11cYbLYi8CXlcAtfDl1zcMY/ajFFEPA8P3e+om5XZX7/mHhsC+es5wK4viAP++fyZt96As8ERoBynEZjffgcm959wBDSohwUPXobAOBLmYYKCBWb4/wqHIpTn4WThTSDWiIHENxyGKAZCIW1stfgSag8wKKOLH6B3o3Y79ujjj0AGKeSQRJJz0JFIIlkkEQJU4OSTUEYppZQZ0DdkAgZMmeWWWmpp4JUhcClml2OKuSSZZaLppAJEQpDmm2pWgECRcYYJp5hzElnnnVGyCeaedZ4Y5Al8AlrBb0Q2WWicti1JlpKPLiOio5RWaumlmGY61qSaVhXBbZ3WM8CoVYZKBQKjljBqcaaGtEGqsMbYqhETqGorrJ/OSgQFsL56K6m6ChHBr7366oACnBJJQLHE4oqopiA0Ky2uVlrqFQrTMptqjp1+oO23qWYGbQDgfuvBl5gSWv+utqUOGsW12U4Lqo8IHCDrN+s2K2iLFIRwwAEbnEJCvrBOsGO9/75wQIQVhRDvrRHIyEEKCVe8b3oO5BsCihlIUPHHAeDCwLoYjDhCCR+nbNqw8u5UAF0JJBATOwTYaEHKCidsABgWrMAsCd7tIQAARBdtNItD+ItzwhacsWzByaYxtNEsHB3X0jmXEHVXGkyAViNTU130vEUEgPW/eQ4qttVXn63CxTuGvTbZRXCQdc4VkyCk3GLTncQGbqPbI99U+82k2yiovXbVhhMRgdt++kg420Cp4DaQFixOdONEMHC35aAv/OPkY09B8dmja84C54efHfHgqrNOBAqBw1599e2US4P35wDbvrjsjkMed+zOhM57CkE3SPrmViDM+7/3jrj86qKezWqL0wNft/U3Zq659kXQvnS1HmZPy9J6d088cCmHsHVb3v8eBrkqhKCf73MHu8b6+puv/xX8098LcGe0AfxvCHYjIPMOKAQEKPABDNxVBhwgJx3JKAgAIfkEBQgAKQAsHQAAAGMAgAAABv/AlHBILBqPxAukwLwgn9CodEqtLijY7KjK7Xq/xVF2THGCz+i0kEnOqt/wqbINasbv+KGYjs3743t8f4NpgXVkZoSKXIZtiV17Aicdi2+NbH1fEBaSnSeVhXx1mp2cpiCgZ1eYZF8npqWSW6lel4cUtbC6AhC0taK4jBqxupS+wqKQu8XHyLeYwsSxzc7Ph1UJ0rDG1HLWz1QLy9Pd4cDY46fl5t/XUpvanevsfI9P8aaz81G2t+/4vPZ5axcMyoh08gS+OxclG8JeCvkxfCIOYMSFyaA0QBjwosGJRzpwROXxI0F7egAKKCkxY8iRLE3We2kRDbRU/TIZeYUP4i//AhOCTtCA8o+SEVvMIF1AEyEYChyEfhBqoeSFYT1zSd06tCTUeCStCOA6VepKqwW06ZuSACjZskJjplDCLNyDt3Dhyl3Ds4HdvIDdUt07BKpPjXgFA2ZKeM07xYHfcmvMT0HiyATOUq58GXLZyZuRnPCMGW7Y0KKjduY6CbXB1awZu0ZcmvVsKndXj7otp3ZX3lwaJJYNvIrk4q62JiiK/HHQjs2TR59Ovbr169izN9+zpEP3797Bhx+PvEEADOfTo1+vvj378xNAh6bgvv57++kT8L7PH39/4ptB4N+A/QWgGWoFEogfB7MtoGCC/D3QIIQPtndgaBVSuB6AlNGn/2GF+s1m3ocUfnAYatyNp+KKLJ6o3YswxijjjDSGNkEGBdWoRwUGVGCijkNwwGOPBogA5AhEDtnjJzQKmWSSOMpYwJNUFsmhdRkoWeWQFjDXnAJahklliNVRsKWYUMpXXgRonskjB1cW94Cbbl4YHQJtuhnAadElQAKdW36ghhi05Cgam4COiQYBLghaCQcDMPlanm2qAgMLAKxQACFTljCAAeEwQCmVCoBBAgCoovpjHgQM4KqnpVJxQguJhuCjK5imiqoMBKyVBpivbuCpA11YUCsJXziga667RqnKBw4EO6yrCHgxAaAmeCHAstyWoEYI0oa7qRdZnukXIyowy/8tAOcmYdludVh2hAbhCvsqsq4g+iQD1q7LrAfzynCAwAMXfIChQpAw7cKuanAGmEpOUEsM/qaqpgYGE1wwwnPVK20aPJlaMabZBqxxxhyngADD0hJADQjqxnywaBmj/ES0LA9LzQYjsyAhzTUTnHIKCuQ8LL++KBDzssRCEfTGFBng8at8KrLAAT2TafLJUN9jtKcR0GJCzwBrxLXGQyc8NaygdEDx0hY39PTAaXf8NQqgRNBzyWbPXbfKaw/gsiIN9HwAW2d3bRAKd6t5RwlZUzH3zFJYcHcAhDzQc9OVT/632mtLisfVkUvut6yBg+oHA2Rj43kVAdxd1egu9ByW59ZBf76Gvbx/jAejIw8ua+IC6y4EpKHjEcDIh3fxOhfgTh1rHGNXbKfcxBsvBL1GX29TxSto+8LpXURgtONoKLu09ts/H1zv9vJ9RwcSxNyu89m7Aj++foxgwgAskAAG2FcY90HCBEQSgZcUgrH8yaiBTyMgbyB4NgneBgQGhNEMEhe+JiVOdDJq1cmMBCQPRWBVewkCACH5BAUIADQALAgACAB4AHgAAAb/QJpwSCwaj8ikcsksQgqUzqJJrVqv2CxtFO1GteCweLz1msnotJoINYO667gcy3V75/h8ss1/v0d6gYELdn4ggIKJcReFhoqPak+NX5CVYXWGbpabWn2elJyhTZifoKKnSIyZbheorkeSq3evtEKqsm21urGliLqupLi/tKWGvsOihJMQyKi3uKbNm7yF0qfLFJeS1mBS0NFWBQIW4xYg3FfBdp0a5O7l6FXFcHQn7/fm8UzPwlcg5fje6aNCjZ48gAEBDiSobNaoBggjIlwojw/DhBizUax4LNU/jBg7blzSimQ7iSA1MBuJ5klKlAlEsszC5SXKKTPFMLIZsEDO/zEdTvIsp/HnpaEIZRrF8hEmvpVLgQpN6TNqmhE2rcahkFHrnJte53AFCC5sGqI4zYptkFbtnJJu48qdS7eu3buRJOndy7cvXLsgPkwQTHiw4cKIDxuGSreDYgKPIycuXLXxZMmYH9/NzPnyhAR1R3jujFlAaNKoDWuwOzq14hOnXZMG3Lp24qJzA0OWHVkE3jKEggsf7rft7+PIkytfLo0L8ywiVGSwpuAzMQcsAMQwXmtBAAwBHjgjkV07ABPNLIBfv5rTBBjm43N/9X19/XOQBKSIzx/BMPX12YeBdYIUEAJ/5cm3SwYCBvidBXp4lyCC8a3Q3QQNZphBA1+9MP/hhxMSQIsADmpYHwK4ATUDiBTylyInBZhYon0EMNaJBy3maJ5vr5zAgIwmWqDUPibEoGOOJsx3ColAzsgAbFcocMCRLXrwIjEcNKlhZUuAMACLR84AGjcUIKBliQ8oOYSUVFIonhKMPMIlEj46aSd4c7LhQpv9qbmmCiIKokAF+C0B4JnrKWkAn+YRSsUMB8hgZR6OVWAABgQRcOeMph3hIZ8SdNpEBpGWysFXBlhqKYQEmbApjUiA+WGN8pQqg60KXKVeqrxa6qcTGjCoJRL7HdnCr0Z4YOuyKfgnxgO9qqpqoAe9euoRRebowJWGMnvrtyiM0YK05KbaAVMY2jn/phEjrIjgATymM4C33x6w7hAQkGMHq0WcUC65DNzIKZwohAgGAfR+i6kRJwzg8MMQ50kDA/9KCyV0wj7YRAIfbIisEhIkfKuNQjQMcQkboDyAxB1E++9R45CcB6n11gwvnSefLPHELkebqz4UiHxACXvkHHESPZP78SsV2FwzvwwbrfLONFhQMa8TxGOB0BUoYbLKOu+BQdKqctsdpE6XanbVYOdMddVXpxoAN++lfevcXkuN8ts8k+2oNCHbLYHMRDSg98pd+n3pkKhgILgM1Bbd9tGGxl3Bz78k8PgGGx/O9xYRWE74KSgI3V7len8Od9wf/BKdyAZQ8bXRqvd9q3WhwJTw+NqFey675ST8dQoCQgcs++SUj2q5qKioIHQ4vhOkeASvSCn4m8enbsWgceMeSpEJcw498inXPsS4VzP/vcinZy+1+SV374rm9FLvT/RWBHA702nDXzL+8kha1l4BAQcwqxMArEIDXGa8WhAgBDJwwJMQqD2aYOhS6rPK7CbnP7xsMGzPwRn5EBdCWCSwhENYAfnsh8KoGa2FSRgUCGEIC02FBx1BAAAh+QQFCAAsACwAAB0AgABjAAAG/0CWcEgsGo/IpHLJbDqRo4X0Sa1ar9iqFETpQrLgsHhMjHK9XrJ6zTZeCmf0edSu27HvuBx97/uVW3t6cH+FhWaDiV2GjHV5ioKLjZNjEJGQkpSaV4hwl4mboU+dmJ58oqhLlp+QdKmvbqytsLRDgbKDF7W1pKasu8Asq7hpwcC+pa7Gx8nLzsPIBcrOwY+D1NjQ0rrY1NbT3c/S4eTl5ufo6err7O3nCwnx8vP09fRf5VtR+/r9/P9HBKQAQLCgwYMIEYrIJ8BCw4cQI0qUuGAIgoQYMx48wdChx48TQYoU8OWExpMZO3QcGbIlxBEeUMo8WJHcCJY4XT6kMGOmT/8A5uDpzMkSRM+fMs8NXSoyJlKUNcMJZcoUzlOoK4lStUDHxFWNCbJubalSiMCvCRfaHEs0qi17cLvEdSvVn91//tzp3cu3r9+/gAOL4hZOwwAE2DSIwPeswoHH3j5MmEByGYPHmCc4azC5cwLCsDikwEzaWWfJqAvAaoCCtGvNwU6gPt2Z8aYIrnOrKMuLtm/K4AyZUKE7twFgCn7PTt1IxIzixTnUkr28OoHTvO8kaA39AADdql9BsK78NFc7HTB0904c8/cSFmhFuV6+fIM2H9qvzz3BNqwLnNVnHxkWDLDed8b5twsEAghIngLZWUFBCAfqh9kGHHVTQHIOVlf/mRUF7mfhYwqoEp4hER4BAn0PKpeiKhXyp6ARBar1hwYYnJjETS2WF5wSJIhImgE67ohCCYf5MR4GASAA2o4WdIgdFaPphiBp8D0xAZJcltgGjwEwicF9TmwoJWVUCsnBj1BwOcCbA4Rg4xiciRlmmFUkwKKAaa4XwIxAurmBoASw+YQFGdxpJ5NzNsGjgPFp6dqVB4QAgoSCZhqBGCYo6imTgAIiQn0UVMGda1laAVOmg8J5aRFCeRKIBiou+ikBWFDAwW+RmvqaoUsowCqcSdJoQAXIHqtsBS8S8Kmnr6pKnWdPHrrreXi0Suy2SGy3bLLIvrjks2KCYU0qCGi7/y2S0qkI7rfMIiECuXcK4E4Bw3IZgqHwLvuiMInaaiew4ZCwrqC0dvvuu0o0QG+YXqpj2MFwktDwwv7uiIDAiv4bzgoUc1lkEd72e1zDDzepzgMhs7tEyRh7bFbKGQblQMsOMAECxsrqnDID6AynrroRJwHzwjLP/HDC5BiVbwlE6sxzCPGqwgDHYtJFTQQ413zx1EkrTe8D5Aj0NAZlTh11ExNgHWap3YSA8xM7g12m20x2QwDOH9CtdtgW0ezNzU9TUbfJgAfuNjUFttxrE0e/m7jY5I5cy5b5VpDn31V0irXXyDm+ud2Gux3WMk4fHICEnHeONTYGHzy5LWpzQkVu0ct4kCnoaZOe561lc22Ak7m2ruqoTfIu2MxUx7y8drU/j57J4UrvSPTWtxGByRlkXwdr/Ubr/RoWwEvm+F9y2OgyQQAAIfkEBQgAKgAsAAAdAIAAYwAABv9AlXBIVIEIJsWiyGwSCyCKc0qtWq/Y7HMF6LJgn5G2SImapeO0ep0dpb7wrsTCHpZB9byejYh7vShoY2dCZ3h7iIlMEn5/XiRLaneFZYqWio2OfwRrhJefiC+ao18pDW13gqCrdQakrxUFWKmsT7VaCS6vrwyRVGK3wWsPmbtyHMLJlwkDxsUDCcrSiA8HzpkeHdNaF9tPGTHXmgjA3lWHRpXSFBXF7sfmTqmTlNMNb+J/qvGFdvPxBETlM8FPHiV1+5QtwPDuz4ByBZ/MM5QwGbuGLCryWzDRn5Bu5gQwIvUhYpMOUP59NPkhnCZfJiWm1FhwoR+CMU+iy8mEGRz/mDwlBm0iQkKGoWS0IdW5tKnTp1CjSp1KtarVpRSzajVE9YLXryPAig1LVqw8BzIOpF2rti3bt27VCpjKcaLduxNBqpgQF67fvnGjSR2Bd2thCmJy/V0M+G3Xw4bxXsDAuHLjA48hazaEwrLnuBCfXthMGnHny5/hhnY6emZk15Ipo579N3Pp1xAU09691vbtwt348ubtG7Zx3HY2pKZNZ/Bvw6tzv7brsWvZsdexX7/Kvbv37+DDix9vaTV5exWQOTUjmsSA9+ZjLhBgQcDOoB/el3j/oCmF+gDKwpMIKOhnYHwRAUhfgCad4IGBG+zHH1L/LaigfUCtEwCEHDoA/0FQ811oIX33CTPCBBF2KGGEAQR1gogw2qeMACuouOKKzTUY444f1gLCgzbeuKJSNY24o5EI5gGBCUEKqV8IGsiX25E86kWNA042ucEDSZpTAJU8IqJBBVp2iNNShIEZY4+dtFAmhxGUSGEDahop5xVjvnljjk6MppAVHWhQ54UZnpOinlt2aYQBcwWTwAREUgGCkZSKOAYDiA7AwCwRVJAem5/MN8EHCmCR5qAyZlHgm4xmwYGnsApgZSInjGrrnTpVWqkWelowaxUGwCqsBr+ycYStpI6q6BO6GqmFAVqSc6mwwQ6rZANIIIvsKYM0S6IWDwQZgIC4UGtui3VcwP+BttkmW+g5L+oa6RURONmqGhhUq6+1PSWQG1mB+ttTsu0SzCcugtqZxpIQljqMudROcFIAGFBsscWgDmEBwexCauyIuAIqAgfEGrvvyQYUSkHFLF+MQcYfdazttRAsWwsBKIdQ7cF2uNzyy/JwzK5g3nWQs7BTrPzzxTAPUXDH4DEAsb4nJO0z00nLfGvRU8O6qdVLs9x0zFqTOnZULXQd7DlXiy1p2aRyZ4HaIagHdttnCyEA3DT5d3S1gLZNcd5GwG33VCj+zfPAYQ9uBbZCb0sVO2pjgKfgQFvxNLtUZfA3lJc3nvk5hkvlYOWcik64xpEjO+9SaatNLtuqz1Kd+lMK0N1f6ni72nq2fZv0eQS4iD5uG5vP7LfaUWahdO/O/65sUw98PojxqxfxgPQhFzT30d0zDn30vwe/0dEILIx59tpr/W5MUqPM/je1d9tx8/7lS234E9c/yNO+isrGKkACDsyPDOsz1vYsYL7zPC9sBzxPHR7oswhKsE3+u+AqOpBADd6sbRLzoI/GJ8JVNKCCJQzGlB5QsqcEAQAh+QQFCAAuACwAAAgAgAB4AAAG/0CXcEgsGo/DEWLASmEKyGiRIq1ar9is1tiZAVjfr2BLBJHP6PQZFQa7qWi4ek6nN9r4EHlEAfXldYGCVghueGJnf2aDjI1FGIdtEmSLjpaWHJFtBFuKl5+CEDGaYQuUlaCpaRmGkSRZC4oFfqq1nQekX6hVsn5/tsBVD7kADqeewclIXrljsL67ytJCd7kqI8+92NPTHsQIVrGyQlDZ3IMdo7kdV9rRSHK/53UmxBHttOSAUtDy83MLcK3DJ68cr37/AikgZiwcNH0H3SWc4+CbQ23h9C3aN7FTq0MHTEXp5Y/LLGTIOqJpYXEkSQoXXL7Mx42Cgg8WtiVSR4rdkf+ZMLU8POfhgAyjKQjEPFMvlweZGjnyoxmnJJkVR7MidUZGBbEG4UaIhRqVaqdxTJFqzfqUjACGdfoBMnisoFQpDtaqzcrg6kdDGUTasZqIsIt3UvYq1vpA6N8XH9CZXNppSsosKRbrRXoiC0vAjpZeFoqyzBYSmzUfbYEl4BcHPkHdhVdG7kmz7VTr/qAzCgEWkVVGLbsxjQgVqZMfFWElgXByxGfGCaE8uZ7n2WwLslBCt2oSELCTgwB0qK9BH5B73zxB/OHyEtGhXq93gAbsiNFCd3QCBX3FdNWEkUmGOaJAZtWp1V5HtvUyjQnqVbcCZRPZNYQsFNZSQFHVPcf/B3y9JdOAf5px4qF0E3GA4Fru3dbHfh1lEOEBC7ZYYEIgVICUezDySM0A4PBIno9EjEXkkUgmqeSSTDbp5JNQXgQffFEG0t8AG5SApZZZbulll2ByWcJ9SPJh4JdioqmmmojZOGWD51245px0bhmekm++KQSEafbpZ50hCvnie3DKFR0EHtSpqJpM3igThon+ueiaGfqYT55onbTnpJwOEKilpR22XzmGatTppHcmiZBGo4LowgOSnmrnknBgWqicsobpJZmqHlrqS5WKY6t2S4pl7LHIBnqBsVU26+yz0EYr7bRKVkqtLQmQoACon6rUAQMVhCvoH9Ym9IAB4YbL/5x45OlXoQfopisudhcAiyMG8sarLr1AlavhB/kG3Ja3IPr7ybkC64tukAzmCUwDESScMK//tJtnt/IpLHG+E3047CULTKDxxvp21vGwjp5xgQgjk7zviSgLNscJJLgscI38xoxxO+DanG8AAbLr4tBEk5tIyyGQTDFttsiMhMe27vwT0lQ31hzQGuYkZdFwGmyEyFQHzBsWDGAQAAdON3KCAGxn57BnPoeANRYWmG33CVKrXIAFbPMddBRQF5pyEXEvzUsGAdiduAkm11Fv35Bz1RrXDsJNMgduKa45A5JXxffnkLf5tMVAaWHBxgwLtfjmZgenhgagx8523gRyTf97EgFMjAYCrK8eWxLkHjuoZZHLjkbgo/GscOeq9272tlxMIP0H01M/QdqHFR95qnVp6jneapS9+vgZwFO99QRQj/2rssfudRXMziMC+eMbTs756I/9k/ag/10s/ZobSf7OJwX+ga5K6XPe3PY3QOtNxYAWEB2RQKBADJjIfPib3vqo0b7QPckEAFwc96KXQfU9EIJOgpgC1yXABqavORDUGpMQp0CpfauE14NfB/u3pJusEIYuzCEvdjg7PFUQAe8rAA5xBrgYCuB25qqg/6YQRCEOkYjOOVK2fsizIG5wClgcoXhAWMPWLPGLtYnhBCtoAVic0Y0Q/B12aBhCKN6PsIRaGAEW7cegEJqtcV3Eo1BiKMaOCMCPqQtkA9FYhMftUI4qUSEAp4jB9A2QkcTrYCHfBUCrDRKHmASjJnmUQPIlooqhTGPxJFgx3mluNvx44ymKd6SViQwBbYyDLI/ht2tVcpG+BNkug8mIO2YwlcT8pCCT2QgO4JCZ/CkhJKEZF0tqkJqWiIXfoMiNIAAAIfkEBQgALAAsAAAAAIAAgAAABv9AlnBILBqPyKTSSMEMSpnOckqtWq/YbJHgAni9Iq14TC5XBd+0K2Fuu9/Xg/o7gNvv98Q8DcH7/2Joe15sgIaHSoKDFIiNjkKKe4yPlEgEIQcoUYGDhJWfQxAOB6SlDVqRc5NYC6BmBqWxKQVZqWqrVgsUu7wguK5LCbKxEbWdAL9UHb2+u8BVE8Mqpli2fKzMzQUgz1Mm0qUbI1fWX8nBvKHcLK3dSQrgMKQK5MfnYvfuQ9Py4PWd+ZD0EqItoD4E8UhlsFLOU5VlA4ms05dkRImEKgwOaYjsITOKxhIaOGPPYzaNIIegiNUvlgYqHFHqOpkuZTCMG2CWVEZzok3/JSQwcphiYacSiD1/ToHAL16fREbRRWSn1BvGAMGiHkGajWDVJRZZNiXl00jMozVpsSv79R1OqADRnmx7BVNCC27jyp1LdynOcUeK6jVyoaevvlUCXEVydivftd0KWODwcgxTsS1TMNYqpPDjyAGeiKYnJprIwJzXpnXmzoPoEqINnMoS9i4TAg8aJED6gEA7iUndPXhNfAAGteTeljG87QJtOAaKF/8A2AqseAiqLy/IFts2lEmki8ebC3MJDtrLjOB+WAtz1lVQiIdN/4mHQlQYyJqQvg3g7xT0x5M6AMKXWH3z1beJX6REgBwe/3m3TleqPfXQBgkiiOEG6BF1/8BQh6znXkQ9OUfOhihqKJ0AYHX3h4ACNUMQezW5F0GGKhoHnj6GzVjjciHgqKIJbXk2FXNvjMBBikI+QZpS7Pl4EoyWZZBjhiHMRhGAwK0ylYl53Njka1tSKKU2jlgg35XTQblNKF6BcomQDtokIxPfjUDli6Fl+GCZP+YJ5icnuMYkbA981V6cFCmwJnF7uuNlAZF+8kGKILblIkhNiNaXWoNCacAEiJVq6qmopqrqqqy26uqrVRUo66y0wtoGCBgYUMGuvPbq66++4mcrKsDqamyxyP5ZJITIHutss7ueGqobE0BrLbCq0kpjQUgEcO2z0Ka67XsGDuHtt+hWmv8Sa9pu6yMR1aIbwrW/fTpuu1GGIi+4wNaLmJkVoklgL86pye/B8yZ76oT3khugvvs2ewKqssb5y2P9rQeqtmdWXKp2F+ipZxEhi2zyyMOmrPLKLLfs8ssww0wBAizGjAgEBASAwUI2A6LkzkBX1nOYOhe989B2FPAB0EbrrGWsAj+zwANMV120vz9N5YoATXdddKZQc1tJAgx4bXXQnD4GsM8TmO22zhZKauabVMHphwJnv3112g17THTegGegwbRbztjlR3DgqnfeCmANksZ9c2kGzoEDzp+pSKo2eQaVmy2sQI+oiy/i+HDeedUCEF4ECL41okul1U2CuLLVnG7/9AOOE8bBBxPU/KLkJt0ZnBVlL773GRMknzwIqm9HevA0iWH8zp+Dpfz1uSXO8YjuXoFA5xaoS8Rk2F9/QvPKQJB5LhZzV8vbHbLC+/zlh+H88FeYyDDwxHuuxQUKoF/5LoenBZxsGdOC3PYsU6D/cQB1YyDbAJUnNOAIYDIXzGD4HHMvBhqOgRrYlDJwI0DsCQgCGsRgBk/4Hv9IaoIUjJEKZ1iRhr1qaiUkYfIqksIZwshI20IfYkQAQ97lY2o9XGENO8gqpeVwfuSR4QyVuMQgrgqARSSgFKcYRSQoMHrZyuLTHMPFC0aKK7WimA4nuJQkYnApoxOXGNtYxtTBsnF9/3ri9XhSx9ytzoalIqIeqcNHN4quhXnMokfqmAtAFml3g4wbWvoIPRp9ao6LLGP+EBmrNeYwf2404xU4CSVMZpKLfuRgiRSlSFBScpR4tFMRpeBKN9ImluvSo+9yUUc7SigbQuwG+UqYyi328H/4q0oA10hLVoTSl7/8kaYE2QDx6Y6RYgCiNW2FwlcizT/P/GaSnrlNcfLQm+Ykgwawmc7toLKd4EyhJOEJwt0gJggAIfkEBQgAMgAsAAAAAH8AgAAABv9AmXBILBqPyKTSWGCsVgjIckqtWq/YLPGhOni9Aq14TC5TNd+0CmRuu9/WkvobgtvvdtA8je/7xWgvewcFf4aHSoGDbIiNjop7jI6TSAotAx4TY5BzklggERIuDpqUWgseAyWqqydanGqeVgouALa2DgumWBirrKwdWbAwXYTCtbcsthG7ViC/0AHHg8ZYJcnYhc1TXL4b3gOuV8PF2rPYyukP29zQ0AYX49TVVSMH6Mkf7EsW7t++FuQJinSFAb50AMLsS7Lgn79VAhc5Q3bwha6FSQg89KWvCjlispSEqGiLAMYlITa28jgvJJITJAFIuHiyksoSGFhSc3nkGkn/hTWThFIpjl9LKhxirgi65JlKA2eOLrEXkwLTJU7AORygYMpHekJjZrg6xcFWrV6lMowZgyZZmyoRGB3YCaXYt2VvmjvylacQC2zxer1JIpFaJiqqCp5C4qaGJH0zIpy8bPHgp5APE4FA8WAwy1gd29yJJMJddh00iCgqxqxWh1KMRGbSGZ9bUwgqGNAdQcAIQIT5ahayIaaIMbezXAiwmzfvBGIMvIbNV8EJEAWyn1CgIPYWpWIWUBhP/pXz5rxNfB4XnAzVn8pTk8c+PgsG9OfT25++yqR7ErUl40EZ9M1nlRX45efcY848FJAbCyAQA2UsrCfMgULQx4uCCT5n/wUC0HR1R4STdUSFePO9VN+HHHao2wfeKdGQKhjEeEcCA9hygDMYZoidjwY642KLu4nwGz8bHHfIciwA9UmBbTQwJJEtNDBVj4dAN1URBqa4mRgZUMlhBnuBJkOXQZ75I4EtiNnhBMkFNYJ8aNa5ZpRTTmlBPG/ZmaaXEE7gpoJaXqVdgeYg6pcZFDCXJ6E1KernfHz6oUEEROanZKTlZQgkloiMYImbY/X5qaKVNgJBbplayNShaR65CygtPkgWI2jKys6lHQqGJlkc4GcrXlD26cRuut4KqrEimunss9BGK+201FZr7bXY7jMnBB106+234IbrbbaMIoABc+ieq/9uuuyuq+6i5PLjbrv0zuuuq4sl20YH9fZrb7tx4qWvGZb4a/C/0F4g6cKw3lnEBwdH7K60DU9arBET/KtxxKmChuipFhdb8MYk0zuwwBiW2RTDErec07MKM4yrp2quKLLLHEMb8s53Nlryz+fCSyzPuHbacc3cJi2u0kx3m/C2F0DdsdRUx2v11VhnrfXWXHd9dQEPFOr1HwtYMMHZlgm9UANnty322HCAwEHbdB8Nt3vcQUz32WpvIylGqn2w994no2bnPtsJPvjgfTaM2tyLK06A5Mv63anMKuMBgQiRS754wM2ETLMMhePteeeDZ77NttkNgXnlBE5+OuqT903/CeuH1zziA7TPTgCDKL/e6b6c+2787zam/ffosff++RSlz0q0hp/I7rzirDHkm6r10FzxoV96dLzv9agmQALRl3Ek7EeIO+kVkDvfnTMWnG//0Axrcf3vV4hqf/31wxeEPjYOkKVJfLTL3hn+x8DtMSp/WODTgZbnDNQ5sH8AbOD94oYq5YwOfFgoXuoAkcESni85UaPatlbmuhWRgYKz2Bv6wmPCEroEd12S0V5ciJxE9RB9dpuFBjOIBBwqSnstbB255FbD/xXRT0FE2gTj5b8mBvCJEMSiC4dXre1Y8YLts1PhUJRDNVVrc19U4GagyEIpXst8ViydESnllV+dxHGITtRh7vRYRmrhcYN8zNWVXqezP4JRizBc2R49ZkgrQY+NJ+IhFxn5x+SFUYwewaSZ0PjF8mkykoI0ExyHmD4DXsyTdlwMBRpphTlqJ4qX7KNgFJbG/vnJlp44ZZ/SKECGQJJHkqCerwwZwU8Cs06lDF0li2nMTAqTh4b6Y3yyeCFd7rKGyVxjM8dxwGHa8BTbZCbMvMi+QX4PljJy3d2E4EportM9v3wnPKkpzx9+r577oic+wRnKfc6zm/6cpyWvEgQAIfkEBQgANAAsAAAAAIAAgAAABv9AmnBILBqPyKTS2PlEIoSldEqtWq9Yo2Uz6HYb2bB4TKaevOgNpcxuu62htDfyrtvtFHnJu7j7/2Fnel2AhYZSglxyBYeNjkKJeoyPlEcXFhkGGA8QgYN7k1gUAYoPlWKkBhWqHiBZkYtZIioyB7UyBqdYJqy9dKKfA6FVILa3xgG6xL6rqgjAe9Fow1Qoxse1HcpTW83MrlawaViz2Nci21IPzL5X4tLUUiXX9DIc6Usa3uwa4cHxShDUo9cPnxJ27Yj9szKQ3giDShTsm3jPzEIqERoaMwXx4MSE3C4i0lhrw8OOSU583GfxE8Aj1swdK4gySQCErMDlExlR5rX/XzVT4mx2AZE0RXykLEjh89bLoEMmrGxmweinKRlIHngGVcmCoausDno6RGuKrkanVqiYMpiUjE0PKED7FuzOo/B6xkVBF5HaCgyUvPPidYDWBH2lMPh7oq3LJAS0kkjs969jvKCQdGBKkvIUAmCrHhnc5WWAuPbwQUigQWcYsB408yRidsyCByY4rMkyggOGmwEynCgqC+yE0W5hHg6zICuA5wAi9Lni5Lf14Lt3gY3XwYIFEOA7FGD9XQvqCmE4yIDOnm844Net6wY2NEOZeSSzK2TPHwDbz/HBJ592OM1lW1YaJfNefyzw54AVAgYIH2LLhPDNG+rJ1AkVI5gQ/wOD/R0AoYQR/vYBWUVwsI8Afgh0ThUKHAAigzNYoQCJJZo4XV2AFZJHSSftNGODRBKJwXs5JhkATYIZwOIhAjGpWQtDzogiE8HhmCSFXj3imiUfwFAliE+6A5qSOU6gDWUCpFDkmNCtoJ8oJqBJooFoURACnCGWSYYGmdgZIRhBNecCn/x9YMeNggb4ZTqRIcpeCzvWUUB1jWa5IT4aSEqkA1z+kQADWjqKEpWIyvWIABkIeiJKS705owm6+Ibmph01IKusrWxz6ZZdYTDjDKH62mqAeR7aH0cd9SaglDWhCl0GlcJqq310UfDpmtki4GewxHombrXilmvuueimq//uuuyuC8G78MYr77zztttGdxN8kK+++/bL77/+6nslrHPeG/DBACNMQL64ehYeBQ9HDPHEEoNHBAQJZ6wwwuYSdy8kG2scchTljkBxxeOh7JrFQigg8sIvwywzw+eqfPLNOIcnwsgxH1zzEDbnLDHQPfMMsLopJx10xUTPbPTLNUMMCdBCVz3JqEVnrWbUVnfNMtAuPx1zwQ4r7XXESSyg9tr0ts12w+MGScMIdNdtt8f25q333nz37fff7gKuy2oDC/6GyQJ4h3ehZNd0AQXeRV644bZpEHniiVP+xwInXO45t12dDBHinmMeOVSP32zQ46a3/nnoNp/SXemumw7/umqi0xAeJCk3wjnttb+eq9lCHwJC8MhLDlXuxD96ePLAK4464c3nbKnl0SMPgtx9TXwxzmyQnj3w5HZvNu8Ul7Ea9OQr5fjSTIvCfu0Dm1z+HfenBP/F4cx/+fZmCM/i/OA8wWSnd/yThf8SB7e0qQ4Q4xFD7BQ4v9shAmWHS5/uKDBAr4TiYbyjYPI46A6rsaF4bgBhCbPHvSnYr3qTM6D1Tog2d7SPN1Zr4StCiD4LVu4VwsOhCWkYvxSqL4JiSJ3NOihBDH4Md0McTSAeqDclqiwfU/wgEtsFQ4jpUAgmayIKkda1C0rNHeibGru6SEIZ7i4cY0QX56KYj6uptdCNNUyXFa/owTgakGoPY2K2yjgFKhJjgnELWgCdWMgzprFjhFxk7g4JvkRWDY6TRGMPSxY0QRbhhed7RRHNR8dGfqmNorhjYrrmydFksoSV7AsoZ0hJO/7plbBDJCYNCUtevk9oX6wlAEV5wMY165KprOEwielIUvqyhClkWQF/iUtmfo2Y5wJlKyXpReZobpfL/Cb+VBhMcR6xmuY8IdDUmE5LtdN3B3wnBAtQTnkyJ16UCQIAOw==`;

        this.content = `
        <div class="modal">
            <div class="nonlayer">
                <span class="modal-content">
                    <p id="modal-message"><img src="${this.imgSrc}" width="50"></p>  
                    <span class="prompt-container"></span>
                    <div class="options-container">
                        <button id="cansel">Cansel</button>
                        <button id="ok">Ok</button>
                    </div>
                </span>
            </div>  
        </div><span class="all_layer"></span>`;

        this.styleConten = `.modal{
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.14);
            width: 100%;
            display: none;
            flex-wrap: wrap;
        }.nonlayer {
            width: 80%;
            height: 80%;
            background: rgba(96, 125, 139, 0);
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            border-radius: 8px;
        }.modal-content {
            width: 50%;
            height: auto;
            background: rgba(4, 27, 37, 0.96);
            margin: auto;
            border-radius: 4px;
            box-shadow: -1px 5px 14px rgba(0, 0, 0, 0.5);
            overflow: hidden;
        }.options-container {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            background: #041b25;
            box-shadow: 0 0 0;
        }
        .options-container button {
            border: 0;
            font-size: 20pt;
            padding: 10px 25px;
            border-radius: 4px;
            background: hsla(196, 21%, 31%, 0);
            cursor: pointer;
            color: #9ed42f;
        }.modal-content p {
            text-align: center;
            font-size: x-large;
            color: aliceblue;
            font-family: sans-serif;
            min-height: 80%;
        }.modal-content p ol {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 50%;
        }.modal-content p ol li {
            margin: 21px;
            width: 100%;
        }input#prompt {
            width: 79%;
            font-size: 34px;
            margin: auto 50px;
            padding: 4px 5px;
            background: hsla(185, 43%, 79%, 0);
            border: 0;
            border-bottom: 1px solid #efefef;
            -webkit-caret-color: hsl(208, 100%, 97%);
               -moz-caret-color: hsl(208, 100%, 97%);
                -ms-caret-color: hsl(208, 100%, 97%);
                 -o-caret-color: hsl(208, 100%, 97%);
                    caret-color: hsl(208, 100%, 97%);
            color: hsl(208, 100%, 97%);
            outline: 0;
        }span.all_layer {
            position: fixed;
            max-width: 0;
            width: 100%;
            top: 0;
            bottom: 0;
            background: rgba(7, 41, 57, 0.64);
            -webkit-transition: .5s linear;
               -moz-transition: .5s linear;
                -ms-transition: .5s linear;
                 -o-transition: .5s linear;
                    transition: .5s linear;
        }
        @media screen and (min-width: 320px){
            .modal-content {
                width: 100%;
            }.modal-content p ol{
                max-width: 70%;
                display: inherit;
                text-align: left;
            }
            input#prompt {
                width: 88%;
                padding: 4px 5px;
                margin: 0 11px;
            }.mdr-open{
                max-width: 80%;
            }
        }@media screen and (min-width: 425px) {
            
            .modal-content {
                width: 90%;
            }.modal-content p ol{
                max-width: 70%;
                display: inherit;
                text-align: left;
            }
            input#prompt {
                width: 88%;
                padding: 4px 5px;
                margin: 0 11px;
            }.mdr-open{
                max-width: 80%;
            }
        }
        @media screen and (min-width: 768px){
            
            .modal-content {
                width: 60%;
            }.modal-content p ol{
                max-width: 50%;
                display: flex;
                text-align: unset;
            }
            input#prompt {
                width: 82%;
                margin: auto 30px;
                padding: 4px 5px;
            }.mdr-open{
                max-width: 60%;
            }
        }
        @media screen and (min-width: 1024px){

            .modal-content {
                width: 50%;
            }
            .modal-content p ol{
                max-width: 50%;
                display: flex;
                text-align: unset;
            }
            input#prompt {
                width: 82%;
                margin: auto 30px;
                padding: 4px 5px;
            }.mdr-open{
                max-width: 40%;
            }
        }`;
        let g = k=>this.g(k);
        let gA = k=>this.gA(k);this.init()
    }


    init(){
        if(!document.querySelector("html head style")){let Bodystyle = document.createElement("style");let Bodyhead = document.querySelector("head");Bodystyle.innerHTML += this.styleConten;if(Bodyhead){Bodyhead.appendChild(Bodystyle)}else{document.appendChild(Bodystyle)};}else{document.querySelector("html head style").innerHTML += this.styleConten;}

        if(!document.querySelector("html body")){let Bodystyle = document.createElement("body");Bodystyle.innerHTML += this.content;let Bodyhead = document.querySelector("body");if(Bodyhead){Bodyhead.appendChild(Bodystyle)}else{document.appendChild(Bodystyle)};}else {
            let Bodyhead = document.querySelector("body");
            Bodyhead.lastElementChild.insertAdjacentHTML("AfterEnd",this.content)
            // console.log(Bodyhead.lastElementChild.previousElementSibling);
        }
    }
    displayModal(v,calback) {
        const m = g(".modal");m.style.display = v;
        if(calback)
            calback(m) 
    }

    callLayer(ev,cb){
        const md_layer = g(".all_layer");
        if(ev == "0"){
           md_layer.style.maxWidth = "0"; 
           if(cb){
                cb(md_layer)
           }
        }
        if(ev == "1"){
           md_layer.style.maxWidth = "100%"; 
           if(cb){
                cb(md_layer)
           }
        }
        if(ev == "get1"){
            if (cb) {cb(md_layer)}
            return md_layer
        }
        
    }
    initialModalContent(){
        const initContent = `<img src="${this.imgSrc}" width="50">`;

        loader.writeToModal("write",(placeToWrite)=>{
            placeToWrite.innerHTML = "";
            placeToWrite.innerHTML = initContent;
        })
    }
    popPrompt(ev){
        let promptContainer = g(".prompt-container");
        let promptTemplate = ` <input type="text" name="prompt" id="prompt" autofocus="true"> `;
        if(ev == "0"){
            if(promptContainer.querySelector("#prompt")){
                promptContainer.querySelector("#prompt").remove();
            }
            promptContainer.innerHTML = "";
        }if(ev == "1"){
            promptContainer.innerHTML = "";
            promptContainer.innerHTML = promptTemplate;
            promptContainer.querySelector("#prompt").focus();
        }
    }
    writeToModal(text,cb) {
        return new Promise((resolve,reject)=>{
            const placeToWrite = g("#modal-message");
            if(text == "write")
            {
                if(cb){
                    cb(placeToWrite)
                }
                return resolve(placeToWrite);
            }
            else if(text == "read")
            {
                let data = placeToWrite.innerHTML
                if(cb){
                    cb(data)
                }
                return resolve(data)
            }
            else{
               return reject("The specified value is not one of our command, 'write' or 'read', and it should not be left null or Empty");
            }
                
        })
    }
    callModalButton(ev,calback){
        const hideModal = g(".modal button#cansel");
        const okModal = g(".modal button#ok");
        if(ev == "1"){
            okModal.addEventListener("click",()=>{
                if (calback) {
                    displayModal("none",calback())}
                else{
                 displayModal("none")}
            });
            hideModal.setAttribute("disabled","");
            hideModal.style.opacity = "0";
            hideModal.style.width = "0";
            hideModal.style.fontSize= "1pt";
            hideModal.style.padding= "0";
        }
        if (ev == "0") {
            hideModal.addEventListener("click",()=>{this.initialModalContent();this.popPrompt("0");this.displayModal("none")});    }
        if (ev == "get1")    {
            return okModal   }
        if (ev == "get0")    {
            return hideModal }
    }
}

(function($){
function Loader (color){return new simpleLoader(color)}if (typeof define === 'function' && define.amd) {define(function () {return Loader})} else if (typeof module === 'object' && module.exports) {module.exports = Loader} else {$.Loader = Loader}})(this);
